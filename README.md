# 名片快手 (Business Card Express)

[**名片快手**](https://mfhsieh.github.io/business-card-express/) 是一個輕量級的單頁應用程式（Single Page Application, SPA），利用 Google Gemini API 的視覺辨識與自然語言處理能力，快速將實體名片轉換為數位聯絡人，並提供深度的背景調查與後續追蹤郵件。

## ✨ 核心特色

- **📄 智慧 OCR 與結構化分析**：上傳名片照片，自動辨識並分類至對應欄位（姓名、職稱、公司、電話、Email、地址等）。
- **🔍 深度背景調查**：不僅分析名片字面資訊，AI 還會主動連網搜尋該公司背景與名片主人的專業經歷，並彙整出摘要。
- **✉️ 一鍵產出致謝郵件**：根據名片資訊與背景調查結果，自動草擬專業的拜訪後致謝郵件。
- **📱 掃碼即存 (vCard QR Code)**：自動產生符合 vCard 3.0 標準的 QR Code，用手機一掃即可快速加入通訊錄。
- **📥 vCard 匯出與複製**：支援下載 `.vcf` 檔案或直接複製 vCard 內容（若是使用手機瀏覽器點擊下載，將自動觸發手機的「新增聯絡人」機制），亦強制標註分類為「名片快手」方便您未來整理。
- **🕒 歷史紀錄本機儲存**：自動保存最近辨識的名片紀錄於瀏覽器，方便隨時查閱。

## 🛠️ 第三方元件

- **前端核心**：純 HTML / Vanilla JavaScript (無框架依賴)
- **視覺與樣式**：[Tailwind CSS](https://tailwindcss.com/) (經由 CDN 載入)
- **圖示庫**：[Lucide Icons](https://lucide.dev/) (輕量級 SVG 圖示)
- **AI 引擎**：[Google Gemini API](https://ai.google.dev/) (使用 Gemini 2.0 Flash 進行 OCR、資料正規化、連網搜尋與郵件生成)

## 🚀 快速開始

這是一個完全由前端驅動的單頁應用程式 (SPA)，無須任何後端伺服器建置步驟！

1. **取得專案**

   - **方式 A: 直接複製原始碼 (最簡單)**

     專案只有一個 `app.html` 檔案。您可以直接在 GitHub 上打開 [`app.html`](app.html) 檔案，點擊右上角的「Copy raw file」圖示（或 Raw 按鈕後複製全部），然後在您的電腦上建立一個 `app.html`，並將程式碼貼上、存檔即可使用。

   - **方式 B: Clone 整個專案**

     您可以將此專案 clone 至本地端：

     ```bash
     git clone https://github.com/mfhsieh/business-card-express.git
     ```

2. **設定您的 Gemini API 金鑰**

   請在 `app.html` 中找到以下常數，並填入您申請到的 Google Gemini API 金鑰：

   ```javascript
   const apiKey = "YOUR_GEMINI_API_KEY_HERE";
   ```

   > ⚠️ **安全性警告**：
   >
   > 若您要將此專案部署至公開環境（如 GitHub Pages, Vercel 或 Netlify），前端的程式碼會暴露您的 API 金鑰。強烈建議在生產環境中，將呼叫 Gemini API 的邏輯移至後端 proxy 伺服器，或使用帶有金鑰保護機制的部屬方式。

3. **直接執行 (本機開發)**

   沒有繁雜的 Node.js 模組安裝與打包。只需要在瀏覽器中開啟 `app.html`，或是透過本機伺服器 (如 VS Code 的 Live Server) 啟動即可！

4. **透過 Gemini Canvas 快速執行 (免設定 API 金鑰)**

   如果您不想在本地端設定環境與 API 金鑰，您可以利用 Gemini 的 Canvas 功能直接執行此應用程式（在 Canvas 中執行會自動帶入驗證資源，無須您手動提供 apiKey）：
   - 將 `app.html` 的程式碼貼上到 Gemini 聊天視窗中。
   - 設定為 Canvas 模式，告訴 Gemini：「請在 Canvas 裡面執行這段網頁程式碼，嚴禁調整任何一個字元」。
   - Gemini 會幫您渲染出完整的網頁介面，您可以在右側預覽畫面中直接操作名片快手。

## 💡 使用說明

1. 將名片圖片 (支援 JPG, PNG) 拖曳或是點擊上傳至「上傳與辨識」區塊。
2. 點擊「啟動 AI 連網辨識」。
3. 等待幾秒鐘，AI 會自動將名片上的文字提取出來，並填補至右側的表單中。
4. 在左下角「AI 智慧分析」區塊查看公司/個人背景摘要，或點擊「後續追蹤」讓 AI 撰寫一封感謝信。
5. 下方會即時產生 QR Code，可以直接用手機相機掃描加入聯絡人，或是使用右下角的「下載 vCard」按鈕將檔案存入電腦。

## 🔒 隱私與安全性聲明

- 本專案的核心邏輯皆在前端執行，資料解析與歷史紀錄直接儲存在您瀏覽器的 `localStorage` 中。
- 為了保護隱私並加速處理，名片圖片會在您的瀏覽器中進行壓縮，再以 Base64 格式傳送至 Google Gemini API 進行辨識，不經過第三方伺服器中轉。

## 📄 授權條款

本專案採用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh_TW) 授權 (姓名標示-非商業性-相同方式分享 4.0 國際)。

您可以自由重製、散布、傳輸以及修改本創作，但不得為商業目的之使用，且若您修改本作品，您必須採用與本授權條款相同之授權條款來散布您的貢獻。

作者：[mfhsieh](https://github.com/mfhsieh)

## 訊息揭露

本應用程式以 vibe coding 方式，於 Gemini Canvas 完成雛形開發，後移至 Antigravity 完成。

## Release Notes

- 2026-02-22: 1.0 版發佈。
