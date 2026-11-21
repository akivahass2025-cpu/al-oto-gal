package io.github.akivahass.alotogal;

import android.app.Activity;
import android.content.ContentValues;
import android.content.Intent;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.provider.MediaStore;
import android.util.Base64;
import android.view.View;
import android.webkit.JavascriptInterface;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.HashMap;

/**
 * Plays the copy of the game that ships inside the APK.
 * It is served from https://localhost/ so the online rooms (Firebase) accept it
 * and the saved progress keeps the same address across updates.
 */
public class MainActivity extends Activity {

    private static final String HOST = "localhost";
    private static final String HOME = "https://localhost/index.html";

    private WebView web;

    /** Lets the page share its result picture through the phone's share menu. */
    public class Bridge {
        @JavascriptInterface
        public void shareImage(String base64, String text) {
            runOnUiThread(() -> {
                try {
                    byte[] png = Base64.decode(base64, Base64.DEFAULT);
                    Intent send = new Intent(Intent.ACTION_SEND);
                    send.putExtra(Intent.EXTRA_TEXT, text);
                    if (Build.VERSION.SDK_INT >= 29) {
                        ContentValues v = new ContentValues();
                        v.put(MediaStore.Images.Media.DISPLAY_NAME, "al-oto-gal-" + System.currentTimeMillis() + ".png");
                        v.put(MediaStore.Images.Media.MIME_TYPE, "image/png");
                        v.put(MediaStore.Images.Media.RELATIVE_PATH, "Pictures/AlOtoGal");
                        Uri uri = getContentResolver().insert(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, v);
                        try (OutputStream out = getContentResolver().openOutputStream(uri)) { out.write(png); }
                        send.setType("image/png");
                        send.putExtra(Intent.EXTRA_STREAM, uri);
                        send.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
                    } else {
                        send.setType("text/plain");
                    }
                    startActivity(Intent.createChooser(send, "שיתוף התוצאה"));
                } catch (Exception ignored) {
                }
            });
        }
    }

    @Override
    protected void onCreate(Bundle saved) {
        super.onCreate(saved);
        getWindow().setStatusBarColor(Color.parseColor("#F6F2FF"));
        getWindow().getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR);

        web = new WebView(this);
        web.setBackgroundColor(Color.parseColor("#F6F2FF"));
        setContentView(web);

        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setAllowFileAccess(true);
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setCacheMode(WebSettings.LOAD_DEFAULT);
        web.addJavascriptInterface(new Bridge(), "Android");

        web.setWebViewClient(new WebViewClient() {
            @Override
            public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
                Uri u = request.getUrl();
                if (!HOST.equals(u.getHost())) return null;
                String p = u.getPath();
                if (p == null || p.equals("/") || p.isEmpty()) p = "/index.html";
                try {
                    InputStream in = getAssets().open(p.substring(1));
                    String mime = p.endsWith(".html") ? "text/html" : p.endsWith(".png") ? "image/png" : p.endsWith(".js") ? "application/javascript" : p.endsWith(".webmanifest") ? "application/manifest+json" : "application/octet-stream";
                    return new WebResourceResponse(mime, "utf-8", in);
                } catch (Exception e) {
                    return new WebResourceResponse("text/plain", "utf-8", 404, "Not Found", new HashMap<>(), new ByteArrayInputStream(new byte[0]));
                }
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                if (HOST.equals(request.getUrl().getHost())) return false;
                try {
                    startActivity(new Intent(Intent.ACTION_VIEW, request.getUrl()));
                } catch (Exception ignored) {
                }
                return true;
            }
        });

        if (saved != null) web.restoreState(saved);
        else web.loadUrl(HOME);
    }

    @Override
    protected void onSaveInstanceState(Bundle out) {
        super.onSaveInstanceState(out);
        web.saveState(out);
    }

    @Override
    protected void onPause() {
        super.onPause();
        web.onPause();
    }

    @Override
    protected void onResume() {
        super.onResume();
        web.onResume();
    }

    @Override
    public void onBackPressed() {
        if (web.canGoBack()) web.goBack();
        else super.onBackPressed();
    }
}
