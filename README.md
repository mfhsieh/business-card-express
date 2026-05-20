# 名片快手 (Business Card Express)

[**名片快手**](https://mfhsieh.github.io/business-card-express/) 是一個輕量級的單頁式應用程式（Single Page Application, SPA），利用 Google Gemini/Gemma API 的視覺辨識與自然語言處理能力，將實體名片轉換為數位聯絡人，並提供深度的背景調查與後續追蹤郵件草稿。

## ✨ 核心特色

- **🤖 AI 模型切換**

  支援切換 Google Gemini/Gemma 系列各式模型，依速度與精度需求靈活調整。

- **📄 名片 OCR 識別**

  自動將名片照片辨識並分類至對應欄位（姓名、電話、Email 等），支援台灣地址結構拆解。

- **🔍 背景資訊調查**

  利用 AI 檢索公司背景與專業經歷，產生簡要摘要並提供參考連結。

- **✉️ 信件草稿生成**

  依據名片資訊與背景資料，自動撰寫致謝信草稿。

- **📱 QR Code 下載**

  產生符合 vCard 3.0 的 QR Code，支援手機掃描或下載為無損 SVG 與長按儲存 PNG。

- **📥 vCard 匯出與分類**

  支援下載 `.vcf` 檔案（行動裝置點擊下載即可直接觸發系統新增聯絡人），並可自訂分類標籤。

- **🗺️ 地圖導航**

  偵測到地址時，提供一鍵開啟 Google Maps 搜尋功能。

- **🕒 歷史紀錄與備份**

  利用 IndexedDB 於本機保存紀錄（手動修改自動同步），支援 JSON 匯出與匯入。

- **🎚️ 字型大小縮放**

  支援全網頁文字等比例縮放（90%, 95%, 100%, 110%, 120%），提供即時預覽與防閃爍載入。

- **🔐 本機隱私保護**

  API 金鑰僅儲存於瀏覽器 Local Storage，名片影像經前端壓縮後直傳 Gemini/Gemma API。

- **📲 PWA 離線與安裝支援**

  支援將應用程式安裝至手機或電腦桌面獨立運作。

## 🖱️ 圖片上傳方式

支援三種方式上傳名片影像：

| 方式 | 說明 |
| ---- | ---- |
| 點擊上傳 | 點擊上傳區域選擇圖片檔案（**行動裝置可直接觸發系統相機拍照**） |
| 拖放上傳 | 將圖片拖放至上傳區 |
| 剪貼簿貼上 | 在非輸入框狀態下按 `Ctrl+V` / `Cmd+V` |

## 🛠️ 第三方元件

**前端核心**：HTML / Vanilla JavaScript（未使用任何前端框架）

| 元件 | 用途 |
| ---- | ---- |
| [Google Gemini/Gemma API](https://ai.google.dev/) | OCR、資料正規化、Google 搜尋與郵件生成 |
| [qrcode-generator](https://github.com/kazuhikoarase/qrcode-generator/) | 原生 SVG vCard QR Code 產生 |
| [Tailwind CSS](https://tailwindcss.com/) | 視覺排版與樣式 |
| 原生內聯 SVG 圖示 (內建) | 自製高效圖示渲染模組，全面取代外部 Lucide 庫以支援 100% 離線運行 |
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
2. 填入您的 [Google Gemini/Gemma API 金鑰](https://aistudio.google.com/app/apikey)。

> 🔒 **安全性說明**
>
> 為了保護您的資訊安全，**API 金鑰僅會儲存於您目前使用的瀏覽器 Local Storage 中**，不會上傳至任何伺服器。

## 💡 使用說明

1. 確保已於設定區域輸入正確的 Gemini/Gemma API 金鑰。
2. 以任一方式（點擊 / 拖放 / 貼上）上傳名片圖片（支援 JPG、PNG 等常見格式）。
3. 點擊「**AI 智慧辨識**」按鈕。
4. 等候 AI 辨識與上網搜尋完成（通常約 5–20 秒）。
5. 右側表單自動填入聯絡人資訊，可手動修正任意欄位。
6. 查看「AI 洞察」區塊的公司與個人背景摘要、參考來源連結。
7. 點擊「**後續追蹤**」讓 AI 自動撰寫感謝信草稿。
8. 以 QR Code 掃描加入聯絡人、下載 QR Code (SVG) 與下載 `.vcf` 檔案（手機端點擊即可直接觸發新增聯絡人）。

## 🔒 隱私與安全性聲明

- 核心處理邏輯皆在前端執行，歷史紀錄儲存於您瀏覽器的 IndexedDB，API 金鑰儲存於 Local Storage。除 Google Gemini/Gemma API 之外，不上傳資料至任何第三方伺服器。
- 名片圖片在瀏覽器端先進行壓縮（最大邊長 1200px），再以 Base64 格式傳送至 Google Gemini/Gemma API 辨識，不經由中間伺服器轉發。

## 📄 授權條款與致謝

- **專案授權**：本專案採用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hant) 授權（姓名標示－非商業性－相同方式分享 4.0 國際）。

- **圖示版權**：本專案圖示源自開源項目 [Lucide Icons](https://lucide.dev/) (基於 [ISC 授權](https://github.com/lucide-icons/lucide/blob/main/LICENSE))。

您可以自由重製、散布、傳輸及修改本創作，但不得用於商業目的；若您修改本作品，必須採用相同授權條款散布您的貢獻。

作者：[mfhsieh at github](https://github.com/mfhsieh)

## 📢 訊息揭露

本應用程式以 vibe coding 方式，於 Gemini Canvas 完成雛形開發，後移至 Antigravity 完成精修與功能擴充。

## 📦 Release Notes

- 2026-05-19：1.42 版。
  - 整合 Web Share API，支援手機端一鍵分享名片與匯入聯絡人。
  - 歷史紀錄強化：新增資料匯出/匯入功能，與圖片「一鍵深度瘦身」機制，大幅節省儲存空間。
  - 效能與體驗大進化：自建本地 SVG 圖示 (100% 離線可用)、圖片上傳自動高效壓縮、輸入框自動清除多餘空白，並優化設定面板等 UI 細節。
- 2026-05-18：1.36 版。
  - 新增可自選 Gemini/Gemma 模型。
  - 將 QR Code 改為 SVG 向量圖。
  - 支援自訂分類標籤 (Categories)。
  - 微調 UI 及其它。
- 2026-04-07：1.22 版。使用 Gemma 4 的免費 API。
- 2026-04-05：1.21 版。修正 OCR 辨識結果的 JSON 解析邏輯。
- 2026-03-30：1.20 版。新增 PWA 功能。
- 2026-03-11：1.10 版。改為由使用者於網頁介面動態輸入 API 金鑰，並儲存於瀏覽器 Local Storage。
- 2026-02-22：1.01 版。
