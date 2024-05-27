import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import com.google.gson.Gson;
import java.util.HashMap;
import java.util.Map;
import java.io.InputStreamReader;
import java.io.BufferedReader;

public class Client {

    public static void main(String[] args) throws Exception {
        // 调用 /upload 路由
        Map<String, String> uploadData = new HashMap<>();
        uploadData.put("filename", "test.txt");
        uploadData.put("data", "file content");
        callService("http://localhost:3001/upload", uploadData);

        // 调用 /preview 路由
        Map<String, String> previewData = new HashMap<>();
        previewData.put("filename", "test.txt");
        callService("http://localhost:3001/preview", previewData);
    }

    public static void callService(String urlString, Map<String, String> data) throws Exception {
        URL url = new URL(urlString);
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("POST");
        conn.setRequestProperty("Content-Type", "application/json; utf-8");
        conn.setRequestProperty("Accept", "application/json");
        conn.setDoOutput(true);

        Gson gson = new Gson();
        String jsonInputString = gson.toJson(data);
        try (OutputStream os = conn.getOutputStream()) {
            byte[] input = jsonInputString.getBytes(StandardCharsets.UTF_8);
            os.write(input, 0, input.length);
        }

        try (BufferedReader br = new BufferedReader(
                new InputStreamReader(conn.getInputStream(), StandardCharsets.UTF_8))) {
            StringBuilder response = new StringBuilder();
            String responseLine = null;
            while ((responseLine = br.readLine()) != null) {
                response.append(responseLine.trim());
            }
            System.out.println(response.toString());
        }
    }
}
