import './style.css';

const anime = [
  { title: '葬送的芙莉蓮', en: 'FRIEREN', genre: '奇幻', ep: '第 28 集', day: '週五', platform: ['巴哈姆特動畫瘋', 'Netflix'], desc: '魔王被討伐後，精靈魔法使芙莉蓮踏上重新理解人類、時間與羈絆的旅程。', cast: '芙莉蓮／種崎敦美　費倫／市之瀨加那', color: 'violet', art: '✧' },
  { title: '我獨自升級', en: 'SOLO LEVELING', genre: '冒險', ep: '第 11 集', day: '週日', platform: ['Crunchyroll', '巴哈姆特動畫瘋'], desc: '最弱獵人程肖宇意外獲得升級能力，在危機四伏的地下城中改寫自己的命運。', cast: '程肖宇／坂泰斗　劉智雅／上田麗奈', color: 'orange', art: '◈' },
  { title: '藥師少女的獨語', en: 'THE APOTHECARY DIARIES', genre: '日常', ep: '第 23 集', day: '週六', platform: ['Netflix', '巴哈姆特動畫瘋'], desc: '後宮中的藥師少女貓貓，以敏銳知識解開一樁樁華麗又危險的宮廷謎案。', cast: '貓貓／悠木碧　壬氏／大塚剛央', color: 'teal', art: '❋' },
  { title: '怪獸 8 號', en: 'KAIJU NO. 8', genre: '科幻', ep: '第 9 集', day: '週六', platform: ['Netflix', 'Disney+'], desc: '在怪獸肆虐的日本，想加入防衛隊的卡夫卡卻意外變成怪獸，仍決定守護城市。', cast: '日比野卡夫卡／福西勝也　亞白米娜／瀨戶麻沙美', color: 'red', art: '◆' },
  { title: '擅長逃跑的殿下', en: 'THE ELUSIVE SAMURAI', genre: '冒險', ep: '第 12 集', day: '週六', platform: ['巴哈姆特動畫瘋', 'Netflix'], desc: '失去一切的少年北條時行，用天賦異稟的「逃跑」能力走向復興家族之路。', cast: '北條時行／結川麻希　諏訪賴重／中村悠一', color: 'gold', art: '△' },
  { title: '戀上換裝娃娃', en: 'MY DRESS-UP DARLING', genre: '戀愛', ep: '第 10 集', day: '週日', platform: ['巴哈姆特動畫瘋', 'Crunchyroll'], desc: '喜愛人偶頭的海夢與五條新菜，因 Cosplay 相遇，逐漸拉近彼此截然不同的世界。', cast: '喜多川海夢／直田姬奈　五條新菜／石毛翔彌', color: 'pink', art: '♡' }
];

const grid = document.querySelector('#animeGrid');
const search = document.querySelector('#search');
const count = document.querySelector('#resultCount');
let currentFilter = '全部';

function render() {
  const q = search.value.trim().toLowerCase();
  const list = anime.filter(a => (currentFilter === '全部' || a.genre === currentFilter) && `${a.title} ${a.en} ${a.cast}`.toLowerCase().includes(q));
  count.textContent = `${list.length} 部作品`;
  grid.innerHTML = list.length ? list.map((a, i) => `<article class="anime-card" data-index="${anime.indexOf(a)}" style="--delay:${i * 65}ms"><div class="cover ${a.color}"><span>${a.art}</span><small>${a.en}</small><b>${String(anime.indexOf(a)+1).padStart(2,'0')}</b></div><div class="card-body"><div class="tag-row"><span class="genre">${a.genre}</span><span class="episode">${a.ep}</span></div><h3>${a.title}</h3><p>${a.desc}</p><div class="card-meta"><span>每週 ${a.day} 更新</span><button aria-label="查看 ${a.title} 詳情">＋</button></div></div></article>`).join('') : '<p class="empty">找不到符合的作品，換個關鍵字試試。</p>';
}
render();

document.querySelector('#filters').addEventListener('click', e => { if (!e.target.matches('.filter')) return; currentFilter = e.target.dataset.filter; document.querySelectorAll('.filter').forEach(b => b.classList.toggle('active', b === e.target)); render(); });
search.addEventListener('input', render);
document.querySelector('#focusSearch').addEventListener('click', () => search.focus());

const modal = document.querySelector('#detailModal');
grid.addEventListener('click', e => { const card = e.target.closest('.anime-card'); if (!card) return; const a = anime[card.dataset.index]; document.querySelector('#modalContent').innerHTML = `<div class="modal-cover ${a.color}">${a.art}</div><div class="modal-info"><p class="eyebrow">${a.en}</p><h2>${a.title}</h2><div class="modal-tags"><span>${a.genre}</span><span>${a.ep}・${a.day} 更新</span></div><p>${a.desc}</p><h4>觀看平台</h4><div class="platforms">${a.platform.map(x => `<span>${x}</span>`).join('')}</div><h4>相關聲優</h4><p class="cast">${a.cast}</p></div>`; modal.showModal(); });
document.querySelector('#closeModal').addEventListener('click', () => modal.close());
modal.addEventListener('click', e => { if (e.target === modal) modal.close(); });

document.querySelector('#scheduleGrid').innerHTML = ['週五 · 芙莉蓮','週六 · 藥師少女','週六 · 怪獸 8 號','週六 · 擅長逃跑','週日 · 我獨自升級','週日 · 戀上換裝'].map(x => `<span>${x}</span>`).join('');
