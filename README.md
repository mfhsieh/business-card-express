# 名片快手 (Business Card Express)

[**名片快手**](https://github.com/mfhsieh/business-card-express/) 是一個輕量級的單頁式應用程式（Single Page Application, SPA），利用 Google Gemini API 的視覺辨識與自然語言處理能力，將實體名片轉換為數位聯絡人，並提供深度的背景調查與後續追蹤郵件草稿。

## ✨ 核心特色

- **📄 智慧 OCR 與結構化分析**

  上傳名片照片，自動辨識並分類至對應欄位（姓名、職稱、公司、電話、Email、地址等）；支援台灣地址格式的精細拆解。

- **🔍 深度背景調查**

  AI 主動上網搜尋該公司背景與名片主人的專業經歷，並彙整為公司摘要與個人摘要，同時附上參考來源連結。

- **✉️ 一鍵產生致謝郵件**

  根據名片資訊與背景調查結果，自動草擬專業的拜訪後致謝郵件，可複製或手動編輯。

- **📱 掃碼即存 (vCard QR Code)**

  自動產生符合 vCard 3.0 標準的 QR Code，用手機一掃即可快速加入通訊錄。

- **📥 vCard 匯出與複製**

  支援下載 `.vcf` 檔案或直接複製 vCard 內容，並強制標註分類為「名片快手」，方便日後整理。使用行動裝置瀏覽器下載 `.vcf`，會自動觸發手機的「新增聯絡人」機制。

- **🗺️ 地址快速導航**

  偵測到有效地址時，自動顯示「Google Maps」按鈕，點擊即可開啟地圖搜尋。

- **🕒 歷史紀錄本機儲存**

  利用瀏覽器 IndexedDB 自動保存已辨識的名片紀錄；從歷史紀錄載入後，手動修改欄位亦可自動寫回儲存。

- **🔐 API 金鑰本機儲存**

  API 金鑰僅儲存於瀏覽器的 Local Storage 中。

## 🖱️ 圖片上傳方式

支援三種方式上傳名片影像：

| 方式 | 說明 |
| ---- | ---- |
| 點擊上傳 | 點擊上傳區域，選擇本機圖片檔案 |
| 拖放上傳 | 將圖片拖放至上傳區 |
| 剪貼簿貼上 | 在非輸入框狀態下按 `Ctrl+V` / `Cmd+V` |

## 🛠️ 第三方元件

**前端核心**：HTML / Vanilla JavaScript（未使用任何前端框架）

| 元件 | 用途 |
| ---- | ---- |
| [Google Gemini API](https://ai.google.dev/) | OCR、資料正規化、Google 搜尋與郵件生成 |
| [QRious](https://github.com/neocotic/qrious) | vCard QR Code 產生 |
| [Tailwind CSS](https://tailwindcss.com/) | 視覺排版與樣式 |
| [Lucide Icons](https://lucide.dev/) | 介面圖示庫 |
| [Google Fonts – Noto Sans TC](https://fonts.google.com/) | 中文字體 |
| 瀏覽器原生 IndexedDB | 本機歷史紀錄儲存 |
| 瀏覽器原生 Local Storage | API 金鑰本機儲存 |

## 🚀 快速開始

這是一個完全由前端驅動的 SPA，無須後端伺服器！

### 1. 取得專案

- **方式 A：直接複製原始碼（最簡單）**

  專案只有一個 `index.html` 檔案。在 GitHub 上開啟 [`index.html`](index.html)，點擊右上角「Copy raw file」，在本機建立 `index.html` 並貼上存檔即可。

- **方式 B：Clone 整個專案**

  ```bash
  git clone https://github.com/mfhsieh/business-card-express.git
  ```

### 2. 直接執行與設定 API 金鑰

無須安裝 Node.js 模組或打包。直接在瀏覽器開啟 `index.html`，接著：

1. 點擊畫面上方的 **設定圖示 (⚙️)** 展開設定區塊。
2. 填入您的 [Google Gemini API 金鑰](https://aistudio.google.com/app/apikey)。

> 🔒 **安全性說明**
>
> 為了保護您的資訊安全，**API 金鑰僅會儲存於您目前使用的瀏覽器 Local Storage 中**，不會上傳至任何伺服器。

## 💡 使用說明

1. 確保已於設定區域輸入正確的 Gemini API 金鑰。
2. 以任一方式（點擊 / 拖放 / 貼上）上傳名片圖片（支援 JPG、PNG 等常見格式）。
3. 點擊「**AI 智慧辨識**」按鈕。
4. 等候 AI 辨識與上網搜尋完成（通常約 5–20 秒）。
5. 右側表單自動填入聯絡人資訊，可手動修正任意欄位。
6. 查看「AI 洞察」區塊的公司與個人背景摘要、參考來源連結。
7. 點擊「**後續追蹤**」讓 AI 自動撰寫感謝信草稿。
8. 以 QR Code 掃描加入聯絡人、下載 `.vcf`，或複製 vCard 內容。

## 🔒 隱私與安全性聲明

- 核心處理邏輯皆在前端執行，歷史紀錄儲存於您瀏覽器的 IndexedDB，API 金鑰儲存於 Local Storage。除 Google Gemini API 之外，不上傳資料至任何第三方伺服器。
- 名片圖片在瀏覽器端先進行壓縮（最大邊長 1200px），再以 Base64 格式傳送至 Google Gemini API 辨識，不經由中間伺服器轉發。

## 📄 授權條款

本專案採用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh_TW) 授權（姓名標示－非商業性－相同方式分享 4.0 國際）。

您可以自由重製、散布、傳輸及修改本創作，但不得用於商業目的；若您修改本作品，必須採用相同授權條款散布您的貢獻。

作者：[mfhsieh at github](https://github.com/mfhsieh)

## 📢 訊息揭露

本應用程式以 vibe coding 方式，於 Gemini Canvas 完成雛形開發，後移至 Antigravity 完成精修與功能擴充。

## 📦 Release Notes

- 2026-03-11：1.10 版發佈。改為由使用者於網頁介面動態輸入 API 金鑰，並儲存於瀏覽器 Local Storage 中。
- 2026-02-22：1.01 版發佈。
