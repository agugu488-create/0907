# ANIVERSE — 本月動漫推薦平台

以 Vite 製作的繁體中文單頁動漫推薦網站，包含：

- 動畫名稱、作品簡介、播出集數與每週更新日
- 觀看平台與相關聲優資訊
- 分類篩選、全文搜尋、作品詳情彈窗
- 手機與桌面響應式版面

## 本機啟動

```bash
npm install
npm run dev
```

## Render 部署

專案已提供 `render.yaml`。在 Render 建立 **Blueprint** 或 **Static Site**，連接此 GitHub 儲存庫即可；建置命令為 `npm install && npm run build`，發布目錄為 `dist`。
