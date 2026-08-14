const screens = {
  hero: document.getElementById("heroScreen"),
  center: document.getElementById("centerScreen"),
  draw: document.getElementById("drawScreen"),
  quiz: document.getElementById("quizScreen"),
  menu: document.getElementById("menuScreen"),
  lab: document.getElementById("labScreen"),
};

const modeData = [
  { id: "draw", kicker: "SAMPLE 01", title: "抽取今日酒精灵感", subtitle: "命运已摇匀，请小心开杯。", color: "can-yellow", tag: "LEMON STATIC" },
  { id: "quiz", kicker: "SAMPLE 02", title: "检测今晚微醺指数", subtitle: "五个问题，扫描今天的轻微失控倾向。", color: "can-pink", tag: "BERRY MOOD" },
  { id: "menu", kicker: "SAMPLE 03", title: "浏览异常酒单", subtitle: "按风味滑动浏览，点开任意一杯查看档案。", color: "can-purple", tag: "LIME ARCHIVE" },
  { id: "lab", kicker: "SAMPLE 04", title: "进入快乐实验", subtitle: "选择四类贴纸，生成一杯专属口味。", color: "can-yellow", tag: "CUSTOM LAB" },
];

const drinks = [
  { name: "莫吉托 Mojito", category: "清爽气泡", mark: "薄荷", colors: ["#bff39d", "#91dbff"], meta: "白朗姆 / 青柠 / 薄荷 / 糖 / 苏打水", abv: "约 10-14%", tags: ["清爽", "薄荷", "酸甜"], note: "今晚适合把烦恼捣碎，加冰。" },
  { name: "金汤力 Gin & Tonic", category: "清爽气泡", mark: "青柠", colors: ["#d9f47d", "#94e8ff"], meta: "金酒 / 汤力水 / 青柠", abv: "约 8-12%", tags: ["微苦", "气泡", "利落"], note: "加载失败也没关系，冰块会先替你冷静。" },
  { name: "阿佩罗 Spritz", category: "清爽气泡", mark: "橙片", colors: ["#ffc06d", "#ff92ba"], meta: "Aperol / 起泡酒 / 苏打水 / 橙片", abv: "约 6-9%", tags: ["橙香", "轻盈", "日落"], note: "你的快乐正在以橙色低速靠近。" },
  { name: "帕洛玛 Paloma", category: "清爽气泡", mark: "柚子", colors: ["#ff9dbb", "#b7a7ff"], meta: "龙舌兰 / 葡萄柚汽水 / 青柠 / 盐边", abv: "约 8-12%", tags: ["葡萄柚", "盐边", "清爽"], note: "给今天一个带盐边的收尾，别太懂事。" },
  { name: "柠檬沙瓦 Lemon Sour", category: "清爽气泡", mark: "柠檬", colors: ["#ffe46d", "#97e9ff"], meta: "烧酒或伏特加 / 柠檬 / 苏打水", abv: "约 5-8%", tags: ["柠檬", "酸爽", "小酒馆"], note: "你不是被生活腌入味了，你只是需要一点酸得清醒的快乐。" },
  { name: "贝里尼 Bellini", category: "甜果微醺", mark: "白桃", colors: ["#ffd0a8", "#ffc6db"], meta: "白桃 / 起泡酒", abv: "约 5-7%", tags: ["白桃", "起泡", "温柔"], note: "今天可以软一点，甜一点，不必解释。" },
  { name: "含羞草 Mimosa", category: "甜果微醺", mark: "橙汁", colors: ["#ffc857", "#ffe8a6"], meta: "橙汁 / 起泡酒", abv: "约 5-7%", tags: ["橙子", "早午餐", "轻松"], note: "看起来像果汁，实际在给心情补光。" },
  { name: "卡西斯橙 Cassis Orange", category: "甜果微醺", mark: "莓果", colors: ["#d48cff", "#ff9ed0"], meta: "黑加仑利口酒 / 橙汁", abv: "约 4-7%", tags: ["莓果", "橙香", "甜"], note: "嘴上说随便，身体已经选择了甜。" },
  { name: "特基拉日出 Tequila Sunrise", category: "甜果微醺", mark: "日出", colors: ["#ff8d5a", "#ffd66e"], meta: "龙舌兰 / 橙汁 / 红石榴糖浆", abv: "约 8-12%", tags: ["渐变", "橙汁", "明亮"], note: "哪怕今天有点乱，也可以假装它是日出。" },
  { name: "桑格利亚 Sangria", category: "甜果微醺", mark: "水果", colors: ["#f0717f", "#d996ff"], meta: "红酒或白酒 / 水果 / 果汁 / 苏打", abv: "约 5-9%", tags: ["水果", "分享", "悠闲"], note: "适合把琐事泡进水果里，明天再捞。" },
  { name: "浓缩马天尼 Espresso Martini", category: "夜晚提神", mark: "咖啡", colors: ["#b9825b", "#8b7ae6"], meta: "伏特加 / 咖啡利口酒 / Espresso", abv: "约 15-20%", tags: ["咖啡", "夜晚", "提神"], note: "困和想玩正在同一张桌上谈判。" },
  { name: "法式 75 French 75", category: "夜晚提神", mark: "星光", colors: ["#f7e07c", "#b9dfff"], meta: "金酒 / 柠檬 / 糖浆 / 起泡酒", abv: "约 10-14%", tags: ["起泡", "柠檬", "优雅"], note: "今天的体面先别下班，它还能冒泡。" },
  { name: "莫斯科骡子 Moscow Mule", category: "夜晚提神", mark: "姜汽", colors: ["#c77b4f", "#9b86ff"], meta: "伏特加 / 姜汁啤酒 / 青柠", abv: "约 8-12%", tags: ["姜味", "清爽", "有劲"], note: "别复盘了，气泡会帮你把尴尬顶上去。" },
  { name: "威士忌嗨棒 Highball", category: "夜晚提神", mark: "冰块", colors: ["#e3b45d", "#b8c8ff"], meta: "威士忌 / 苏打水 / 冰", abv: "约 7-10%", tags: ["威士忌", "气泡", "简洁"], note: "你说没事的次数，已经足够调一杯了。" },
  { name: "海风 Sea Breeze", category: "夜晚提神", mark: "海风", colors: ["#ff8798", "#78d9ff"], meta: "伏特加 / 蔓越莓 / 葡萄柚汁", abv: "约 8-12%", tags: ["蔓越莓", "果酸", "轻快"], note: "让风吹一下脑子，别让脑子吹你。" },
  { name: "玛格丽特 Margarita", category: "经典烈一点", mark: "盐边", colors: ["#b6f5df", "#a89cff"], meta: "龙舌兰 / 橙味利口酒 / 青柠 / 盐边", abv: "约 18-25%", tags: ["龙舌兰", "酸", "盐边"], note: "清醒边缘可以有盐，但别太咸。" },
  { name: "纸飞机 Paper Plane", category: "经典烈一点", mark: "纸机", colors: ["#ff9b62", "#f0a5ff"], meta: "波本 / Aperol / Amaro / 柠檬汁", abv: "约 15-20%", tags: ["波本", "苦甜", "酸"], note: "成年人的逃跑路线，通常只有一杯长。" },
  { name: "尼格罗尼 Negroni", category: "经典烈一点", mark: "橙皮", colors: ["#e45a5a", "#8e78e8"], meta: "金酒 / 金巴利 / 甜味美思", abv: "约 20-25%", tags: ["苦甜", "经典", "浓郁"], note: "这杯不哄你，但会陪你把情绪坐稳。" },
  { name: "威士忌酸 Whiskey Sour", category: "经典烈一点", mark: "酸杯", colors: ["#ffc266", "#ff9bb2"], meta: "威士忌 / 柠檬 / 糖浆", abv: "约 15-20%", tags: ["威士忌", "酸甜", "经典"], note: "酸的是柠檬，不一定是人生。" },
  { name: "长岛冰茶 Long Island Iced Tea", category: "经典烈一点", mark: "警告", colors: ["#a2d3ff", "#f2699a"], meta: "伏特加 / 金酒 / 朗姆 / 龙舌兰 / 橙酒 / 可乐", abv: "约 18-28%", tags: ["烈", "经典", "请慢点"], note: "看起来像冰红茶，实际像一封已读不回的辞职信。请慢点喝。" },
  { name: "梅酒苏打 Umeshu Soda", category: "轻松小酒馆", mark: "梅子", colors: ["#f6d36f", "#b0f1d1"], meta: "梅酒 / 苏打水 / 冰", abv: "约 4-8%", tags: ["梅子", "低度", "酸甜"], note: "适合今天只想轻轻冒个泡。" },
  { name: "自由古巴 Cuba Libre", category: "轻松小酒馆", mark: "可乐", colors: ["#c88752", "#8fa8ff"], meta: "白朗姆 / 可乐 / 青柠", abv: "约 8-12%", tags: ["可乐", "朗姆", "轻松"], note: "成年人的快乐，有时候就是可乐里多了一点点秘密。" },
  { name: "椰林飘香 Pina Colada", category: "轻松小酒馆", mark: "椰子", colors: ["#fff0b6", "#8adfff"], meta: "白朗姆 / 椰浆 / 菠萝汁", abv: "约 8-12%", tags: ["椰子", "菠萝", "假期"], note: "就算没去海边，也可以先把脑内天气调成晴。" },
  { name: "黑莓布兰博 Bramble", category: "轻松小酒馆", mark: "黑莓", colors: ["#bd8cff", "#ff9ecf"], meta: "金酒 / 柠檬 / 糖浆 / 黑莓利口酒", abv: "约 12-16%", tags: ["黑莓", "酸甜", "果香"], note: "你只是想要一点颜色，不是想要解释。" },
  { name: "金巴利苏打 Campari Soda", category: "轻松小酒馆", mark: "气泡", colors: ["#ff695e", "#ffc06d"], meta: "金巴利 / 苏打水 / 橙片", abv: "约 6-9%", tags: ["微苦", "气泡", "开胃"], note: "微苦不是坏事，至少它很诚实。" },
];

const charms = ["赛博木鱼", "电子榨菜", "发疯文学便签", "周五幻觉", "退退退符咒", "好运锦鲤截图", "嘴硬工牌", "迟到闹钟", "空白奶茶小票", "正在加载的理智", "被遗忘的柠檬片", "下班倒计时器", "无法撤回的消息", "冰箱里的半颗青柠", "桌角那张可疑优惠券", "凌晨一点的外卖备注"];

const quizQuestions = [
  { title: "今天的精神状态更接近？", options: [["正常上班，但灵魂没打卡", 14], ["有点累，但还能继续装没事", 9], ["今天挺顺，适合奖励自己", 5]] },
  { title: "今晚你更想要？", options: [["一个人安静喝点", 8], ["和朋友边聊边喝", 14], ["热闹一点，最好别太清醒", 20]] },
  { title: "你现在最想喝到的口感？", options: [["清爽有气泡", 7], ["甜甜水果感", 10], ["苦一点，像成年人", 16]] },
  { title: "今天最需要被处理的是？", options: [["一点点疲惫", 7], ["没有说出口的烦", 15], ["莫名其妙的兴奋", 18]] },
  { title: "如果今晚有一句弹幕，会是？", options: [["先别想了", 8], ["我真的只是喝一杯", 15], ["请勿回消息", 22]] },
];

const stickerGroups = [
  { id: "flavor", label: "风味", options: [["柠檬", "citrus", "#ffe46d"], ["青柠", "lime", "#b8f27c"], ["葡萄柚", "grapefruit", "#ff9bcb"], ["莓果", "berry", "#d9a0ff"], ["咖啡", "coffee", "#d6a16f"], ["椰子", "coconut", "#fff3c8"], ["荔枝", "lychee", "#f7e2ff"], ["白桃", "peach", "#ffc5bb"], ["姜汁", "ginger", "#f2c071"]] },
  { id: "mood", label: "口感", options: [["气泡感", "bubble", "#9be7ff"], ["果蜜感", "honey", "#ffc1da"], ["冷萃感", "coldbrew", "#d6a16f"], ["薄荷冰", "mintice", "#bdf28d"], ["苦橙尾调", "bitter", "#ffb377"], ["奶泡顶", "foam", "#fff3c8"], ["茶香底", "tea", "#c9f3d0"], ["姜汁辣感", "spark", "#f2c071"]] },
  { id: "object", label: "异常物件", options: [["骰子", "dice", "#ffffff"], ["签纸", "ticket", "#fff5bd"], ["警告标签", "warning", "#ff716b"], ["条形码", "barcode", "#ffffff"], ["小票", "receipt", "#ffe0a8"], ["月亮", "moon", "#dedaff"], ["冰块", "ice", "#dff7ff"], ["吸管", "straw", "#ffd0ea"], ["小伞", "umbrella", "#fff176"]] },
  { id: "night", label: "夜晚状态", options: [["独饮", "solo", "#c9f0ff"], ["朋友局", "cheers", "#ffd2e4"], ["下班后", "briefcase", "#c9f3d0"], ["周末前夜", "clock", "#ffe064"], ["不想回消息", "offline", "#c5b6ff"], ["天台风", "wind", "#bdefff"], ["便利店", "store", "#fff0ae"], ["深夜歌单", "music", "#d7c2ff"]] },
];

const stickerPositions = [
  { left: "18%", top: "22%", rotate: "-12deg" },
  { left: "62%", top: "26%", rotate: "9deg" },
  { left: "22%", top: "61%", rotate: "8deg" },
  { left: "61%", top: "66%", rotate: "-7deg" },
];

let activeMode = 0;
let activeCategory = "清爽气泡";
let activeStickerGroup = "flavor";
let selectedStickers = {};
let modalAgainHandler = null;
let currentScreen = "hero";
let transitionTimer = null;
const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
let musicUserMuted = false;
let firstMusicGestureBound = false;

function showScreen(id) {
  if (!screens[id] || id === currentScreen) return;
  window.clearTimeout(transitionTimer);
  const previous = screens[currentScreen];
  const next = screens[id];
  if (previous) {
    previous.classList.remove("is-active");
    previous.classList.add("is-leaving");
  }
  next.classList.add("is-active");
  currentScreen = id;
  document.body.dataset.screen = id;
  updateDock();
  announceStatus(id === "hero" ? "已返回首页" : `已进入${screenLabel(id)}`);
  transitionTimer = window.setTimeout(() => {
    Object.values(screens).forEach((screen) => {
      if (screen !== next) screen.classList.remove("is-active", "is-leaving");
    });
  }, 520);
  window.scrollTo({ top: 0, behavior: "instant" });
}

function screenLabel(id) {
  const labels = { center: "玩法中心", draw: "抽签", quiz: "微醺检测", menu: "酒单", lab: "实验室" };
  return labels[id] || "页面";
}

function announceStatus(text) {
  const live = document.getElementById("statusLive");
  if (live) live.textContent = text;
}

function updateDock() {
  document.querySelectorAll("[data-jump]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.jump === currentScreen);
    button.setAttribute("aria-current", button.dataset.jump === currentScreen ? "page" : "false");
  });
}

function setMusicButtonState(isOn, isMissing = false) {
  if (!musicToggle) return;
  musicToggle.classList.toggle("is-on", isOn);
  musicToggle.classList.toggle("is-muted", !isOn);
  musicToggle.classList.toggle("is-missing", isMissing);
  musicToggle.setAttribute("aria-pressed", String(isOn));
  musicToggle.setAttribute("aria-label", isOn ? "关闭背景音乐 Loretta" : "播放背景音乐 Loretta");
}

async function playMusicFromPage() {
  if (!bgMusic) return false;
  bgMusic.volume = 0.48;
  bgMusic.muted = false;
  try {
    await bgMusic.play();
    setMusicButtonState(true);
    return true;
  } catch (error) {
    setMusicButtonState(false, true);
    return false;
  }
}

function cleanupFirstMusicGesture() {
  if (!firstMusicGestureBound) return;
  window.removeEventListener("pointerdown", resumeMusicOnFirstGesture, true);
  window.removeEventListener("keydown", resumeMusicOnFirstGesture, true);
  firstMusicGestureBound = false;
}

function bindFirstMusicGesture() {
  if (firstMusicGestureBound) return;
  window.addEventListener("pointerdown", resumeMusicOnFirstGesture, true);
  window.addEventListener("keydown", resumeMusicOnFirstGesture, true);
  firstMusicGestureBound = true;
}

function resumeMusicOnFirstGesture(event) {
  if (event.target?.closest?.("#musicToggle")) return;
  cleanupFirstMusicGesture();
  if (!musicUserMuted) {
    playMusicFromPage().then((played) => {
      if (played) announceStatus("背景音乐已开启");
    });
  }
}

function attemptAutoMusic() {
  if (!bgMusic) return;
  playMusicFromPage().then((played) => {
    if (played) {
      announceStatus("背景音乐已自动开启");
    } else {
      bindFirstMusicGesture();
      announceStatus("浏览器拦截了自动播放，轻点页面后会开启音乐");
    }
  });
}

async function toggleMusic() {
  if (!bgMusic || !musicToggle) return;
  cleanupFirstMusicGesture();
  bgMusic.volume = 0.48;
  if (bgMusic.paused) {
    musicUserMuted = false;
    bgMusic.muted = false;
    try {
      await bgMusic.play();
      setMusicButtonState(true);
      announceStatus("背景音乐已开启");
    } catch (error) {
      setMusicButtonState(false, true);
      announceStatus("还没有找到音乐文件，请把 Loretta 音频放到 assets/loretta.mp3");
    }
    return;
  }
  bgMusic.muted = !bgMusic.muted;
  musicUserMuted = bgMusic.muted;
  setMusicButtonState(!bgMusic.muted);
  announceStatus(bgMusic.muted ? "背景音乐已静音" : "背景音乐已取消静音");
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function canMarkup(mode, extraClass = "") {
  const canImages = {
    draw: "assets/drink-lemon.svg",
    quiz: "assets/drink-berry.svg",
    menu: "assets/drink-grape.svg",
    lab: "assets/drink-lime.svg",
  };
  const src = canImages[mode.id] || "assets/drink-lemon.svg";
  return `
    <img class="asset-can mode-asset-can ${extraClass}" src="${src}" alt="" />
  `;
}

function renderModeOrbit() {
  const orbit = document.getElementById("modeOrbit");
  if (orbit.children.length !== modeData.length) {
    orbit.innerHTML = "";
    modeData.forEach((mode, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "mode-can";
      button.setAttribute("aria-label", mode.title);
      button.innerHTML = canMarkup(mode);
      button.addEventListener("click", () => {
        if (index === activeMode) showScreen(mode.id);
        else {
          activeMode = index;
          renderModeOrbit();
        }
      });
      orbit.appendChild(button);
    });
  }
  [...orbit.children].forEach((button, index) => {
    button.dataset.pos = (index - activeMode + modeData.length) % modeData.length;
    button.classList.toggle("is-active", index === activeMode);
    button.setAttribute("aria-pressed", String(index === activeMode));
  });
  const current = modeData[activeMode];
  document.getElementById("modeKicker").textContent = current.kicker;
  document.getElementById("modeTitle").textContent = current.title;
  document.getElementById("modeSubtitle").textContent = current.subtitle;
}

function rotateMode(step) {
  activeMode = (activeMode + step + modeData.length) % modeData.length;
  renderModeOrbit();
}

function openModal({ kicker, title, subtitle, drink, abv, meta, note, againText = "再来一次", onAgain }) {
  document.getElementById("modalKicker").textContent = kicker;
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalSubtitle").textContent = subtitle;
  document.getElementById("modalDrink").textContent = drink || "专属实验杯";
  document.getElementById("modalAbv").textContent = abv || "由贴纸决定";
  document.getElementById("modalMeta").textContent = meta || "风味 / 情绪 / 异常物件 / 夜晚状态";
  document.getElementById("modalNote").textContent = note;
  const againBtn = document.getElementById("modalAgainBtn");
  againBtn.textContent = againText;
  modalAgainHandler = onAgain;
  document.getElementById("resultModal").classList.add("is-open");
  document.getElementById("resultModal").setAttribute("aria-hidden", "false");
  againBtn.focus();
}

function closeModal() {
  document.getElementById("resultModal").classList.remove("is-open");
  document.getElementById("resultModal").setAttribute("aria-hidden", "true");
}

function drawInspiration() {
  const drink = randomItem(drinks);
  const charm = randomItem(charms);
  const can = document.getElementById("drawCan");
  const reel = document.getElementById("charmReel");
  reel.textContent = "正在摇匀异常小物...";
  reel.classList.add("is-loading");
  announceStatus("正在抽取今日酒精灵感");
  can.classList.remove("is-shaking");
  void can.offsetWidth;
  can.classList.add("is-shaking");
  setTimeout(() => {
    reel.textContent = charm;
    reel.classList.remove("is-loading");
    announceStatus(`抽中${charm}`);
    openModal({
      kicker: `ABNORMAL FILE #${Math.floor(Math.random() * 800 + 100)}`,
      title: `你抽中了：${charm}`,
      subtitle: "系统完成随机开杯，今日酒精灵感如下。",
      drink: drink.name,
      abv: drink.abv,
      meta: drink.meta,
      note: drink.note,
      onAgain: drawInspiration,
    });
  }, 420);
}

function renderQuiz() {
  const holder = document.getElementById("quizQuestions");
  holder.innerHTML = quizQuestions.map((question, qi) => `
    <fieldset class="question">
      <legend>${qi + 1}. ${question.title}</legend>
      <div class="option-grid">
        ${question.options.map(([label, value], oi) => `
          <label class="option-card">
            <input type="radio" name="q${qi}" value="${value}" />
            <span>${label}</span>
          </label>
        `).join("")}
      </div>
    </fieldset>
  `).join("");
}

function quizLevel(score) {
  if (score <= 20) return ["清醒防守", "你还在认真管理今天，系统决定给你一杯轻轻冒泡的余地。"];
  if (score <= 40) return ["轻微冒泡", "理智还在线，但已经开始在杯壁上冒小气泡。"];
  if (score <= 60) return ["半杯松动", "你不是想失控，你只是想让今天不要那么像今天。"];
  if (score <= 80) return ["气泡代替理智", "今晚适合快乐一点，但重要消息先放一放。"];
  return ["今晚请勿回消息", "系统检测到你很有故事，也很适合慢点喝水。"];
}

function pickDrinkForScore(score) {
  const cats = score > 80 ? ["经典烈一点"] : score > 60 ? ["夜晚提神", "经典烈一点"] : score > 40 ? ["清爽气泡", "夜晚提神"] : ["甜果微醺", "轻松小酒馆"];
  return randomItem(drinks.filter((drink) => cats.includes(drink.category)));
}

function handleQuiz(event) {
  event.preventDefault();
  const warning = document.getElementById("quizWarning");
  const formData = new FormData(event.currentTarget);
  if ([...formData.values()].length < quizQuestions.length) {
    warning.textContent = "还有题目没选，系统暂时无法检测。";
    return;
  }
  warning.textContent = "";
  let score = 8;
  for (const value of formData.values()) score += Number(value);
  score = Math.min(100, score);
  const [level, note] = quizLevel(score);
  const drink = pickDrinkForScore(score);
  animateScanScore(score, () => {
    openModal({
      kicker: "SCAN RESULT",
      title: `今晚微醺指数：${score}%`,
      subtitle: `等级：${level}`,
      drink: drink.name,
      abv: drink.abv,
      meta: drink.meta,
      note,
      againText: "重新检测",
      onAgain: () => {
        closeModal();
        document.getElementById("quizForm").reset();
        document.querySelector(".scan-orb b").textContent = "0%";
        document.querySelector(".scan-orb").classList.remove("is-scanning");
      },
    });
  });
}

function animateScanScore(score, onDone) {
  const orb = document.querySelector(".scan-orb");
  const number = document.querySelector(".scan-orb b");
  let value = 0;
  orb.classList.add("is-scanning");
  announceStatus("正在扫描今晚微醺指数");
  const step = () => {
    value = Math.min(score, value + Math.max(1, Math.ceil(score / 18)));
    number.textContent = `${value}%`;
    if (value < score) {
      window.setTimeout(step, 32);
    } else {
      announceStatus(`微醺指数 ${score}%`);
      window.setTimeout(onDone, 260);
    }
  };
  step();
}

function renderCategories() {
  const categories = [...new Set(drinks.map((drink) => drink.category))];
  const tabs = document.getElementById("categoryTabs");
  tabs.innerHTML = "";
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `tab-btn${category === activeCategory ? " is-active" : ""}`;
    button.textContent = category;
    button.addEventListener("click", () => {
      activeCategory = category;
      renderCategories();
      renderShelf();
    });
    tabs.appendChild(button);
  });
}

function renderShelf() {
  const shelf = document.getElementById("drinkShelf");
  shelf.innerHTML = "";
  drinks.filter((drink) => drink.category === activeCategory).forEach((drink) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "drink-card";
    card.style.setProperty("--card-a", drink.colors[0]);
    card.style.setProperty("--card-b", drink.colors[1]);
    card.innerHTML = `
      <div class="drink-mark">${drink.mark}</div>
      <h3>${drink.name}</h3>
      <p>${drink.meta}</p>
      <p class="abv">${drink.abv}</p>
      <p>${drink.note}</p>
      <div class="drink-tags">${drink.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
    `;
    card.addEventListener("click", () => openDrinkArchive(drink));
    shelf.appendChild(card);
  });
}

function openDrinkArchive(drink) {
  openModal({
    kicker: "DRINK ARCHIVE",
    title: drink.name,
    subtitle: `${drink.category} / ${drink.tags.join(" / ")}`,
    drink: drink.name,
    abv: drink.abv,
    meta: drink.meta,
    note: drink.note,
    againText: "继续逛酒单",
    onAgain: closeModal,
  });
}

function renderStickerTabs() {
  const tabs = document.getElementById("stickerTabs");
  tabs.innerHTML = "";
  stickerGroups.forEach((group) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `tab-btn${group.id === activeStickerGroup ? " is-active" : ""}`;
    button.textContent = group.label;
    button.addEventListener("click", () => {
      activeStickerGroup = group.id;
      renderStickerTabs();
      renderStickerOptions();
    });
    tabs.appendChild(button);
  });
}

function renderStickerOptions() {
  const group = stickerGroups.find((item) => item.id === activeStickerGroup);
  const panel = document.getElementById("stickerOptions");
  panel.innerHTML = "";
  group.options.forEach(([label, symbol, color], oi) => {
    const icon = getStickerIcon(symbol, color);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `sticker-btn${selectedStickers[group.id]?.label === label ? " is-selected" : ""}`;
    button.innerHTML = `<span class="sticker-symbol" style="--sticker-color:${color}" aria-hidden="true">${icon}</span><span>${label}</span>`;
    button.addEventListener("click", () => {
      selectedStickers[group.id] = { label, symbol, color, icon };
      updateLab();
      renderStickerOptions();
    });
    panel.appendChild(button);
  });
}

function updateLab() {
  const stickers = stickerGroups.map((group) => selectedStickers[group.id]).filter(Boolean);
  const completed = stickers.length;
  const placed = document.getElementById("placedStickers");
  placed.innerHTML = "";
  stickers.forEach((sticker, index) => {
    const el = document.createElement("span");
    el.className = "placed-sticker";
    el.innerHTML = sticker.icon || "";
    el.style.left = stickerPositions[index].left;
    el.style.top = stickerPositions[index].top;
    el.style.transform = `rotate(${stickerPositions[index].rotate})`;
    el.style.setProperty("--sticker-color", sticker.color);
    placed.appendChild(el);
  });
  const flavor = selectedStickers.flavor?.label;
  const mood = selectedStickers.mood?.label;
  const recipe = getLabRecipe();
  const name = recipe.name || buildFlavorName(flavor, mood);
  document.getElementById("customFlavor").textContent = name;
  const tagWrap = document.getElementById("shareTags");
  tagWrap.innerHTML = stickers.length ? stickers.map((s) => `<span>${s.label}</span>`).join("") : "请选择四类贴纸";
  tagWrap.dataset.complete = completed === stickerGroups.length ? "true" : "false";
  document.getElementById("labPreviewName").textContent = name || "未命名微醺样本";
  document.getElementById("labPreviewProgress").textContent = `${completed} / ${stickerGroups.length}`;
  document.getElementById("labPreviewAbv").textContent = completed ? recipe.abv : "待贴纸决定";
  document.getElementById("labPreviewMeta").textContent = completed ? recipe.meta : "请选择风味、口感、异常物件和夜晚状态";
  document.getElementById("labPreviewNote").textContent = recipe.note || (completed ? "这杯酒的异常档案正在成形，还差一点夜晚证词。" : "贴纸会实时合成这杯酒的名字、颜色、度数和档案备注。");
  const can = document.getElementById("customCan");
  can.style.setProperty("--drink-a", recipe.colors[0]);
  can.style.setProperty("--drink-b", recipe.colors[1]);
  can.style.setProperty("--drink-c", recipe.colors[2]);
  can.style.setProperty("--accent", selectedStickers.flavor?.color || "#ffe064");
  announceStatus(completed ? `已选择 ${completed} 类贴纸` : "实验杯已重置");
}

function buildFlavorName(flavor, mood) {
  if (!flavor) return "未命名";
  const map = { 气泡感: "气泡", 果蜜感: "果蜜", 冷萃感: "冷萃", 薄荷冰: "冰饮", 苦橙尾调: "苦橙", 奶泡顶: "奶盖", 茶香底: "茶酒", 姜汁辣感: "姜汽" };
  return `${flavor}${map[mood] || "气泡"}`;
}

function getLegacyStickerIcon(groupId, label, color) {
  const c = color || "#ffe064";
  const common = `viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"`;
  const stroke = `stroke="#5d55b8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"`;
  const white = `stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"`;
  const icons = {
    柠檬: `<circle cx="32" cy="32" r="20" fill="${c}"/><circle cx="32" cy="32" r="15" ${white}/><path d="M32 17v30M17 32h30M21.5 21.5l21 21M42.5 21.5l-21 21" ${white} opacity=".75"/>`,
    青柠: `<circle cx="32" cy="32" r="20" fill="${c}"/><circle cx="32" cy="32" r="15" ${white}/><path d="M32 17v30M20 25c8 4 16 4 24 0M20 39c8-4 16-4 24 0" ${white} opacity=".75"/>`,
    葡萄柚: `<circle cx="32" cy="32" r="21" fill="${c}"/><path d="M17 32h30" ${white}/><path d="M22 20c12 9 16 16 20 28" ${white} opacity=".75"/><path d="M42 20c-12 9-16 16-20 28" ${white} opacity=".75"/>`,
    莓果: `<circle cx="26" cy="26" r="9" fill="#8d6cff"/><circle cx="38" cy="27" r="9" fill="#c05fff"/><circle cx="31" cy="39" r="10" fill="#7c76e8"/><path d="M32 18c4-7 11-8 17-4" ${white}/>` ,
    咖啡: `<path d="M18 26h25v10c0 8-6 13-13 13s-12-5-12-13V26Z" fill="${c}" stroke="white" stroke-width="4"/><path d="M43 30h5a6 6 0 0 1 0 12h-5" ${white}/><path d="M24 18c-2-4 2-6 0-10M33 18c-2-4 2-6 0-10" ${white} opacity=".8"/>`,
    椰子: `<circle cx="32" cy="33" r="20" fill="#7a5d45"/><circle cx="32" cy="33" r="14" fill="${c}"/><circle cx="26" cy="29" r="2.5" fill="#7a5d45"/><circle cx="37" cy="29" r="2.5" fill="#7a5d45"/><path d="M26 40c5 3 9 3 14 0" ${stroke}/>` ,
    荔枝: `<circle cx="32" cy="33" r="19" fill="${c}"/><circle cx="27" cy="29" r="3" fill="white" opacity=".85"/><path d="M39 15c5-5 10-5 15-1" ${white}/><path d="M38 16c-3 7-2 10 2 15" ${stroke}/>` ,
    白桃: `<path d="M33 50c16-8 18-31 4-36-8-3-13 2-15 8-6 0-10 4-10 11 0 11 10 17 21 17Z" fill="${c}" stroke="white" stroke-width="4"/><path d="M38 16c4-5 10-6 16-3" ${white}/>` ,
    姜汁: `<path d="M17 34c8-15 18-17 28-9 7-1 10 6 5 11 3 6-2 12-9 10-7 7-18 3-17-6-5 1-10-1-7-6Z" fill="${c}" stroke="white" stroke-width="4"/>`,
    气泡感: `<circle cx="24" cy="38" r="8" fill="${c}" stroke="white" stroke-width="4"/><circle cx="40" cy="27" r="11" fill="#a8f4ff" stroke="white" stroke-width="4"/><circle cx="31" cy="18" r="4" fill="white"/>`,
    果蜜感: `<path d="M23 14h18l4 12v20a8 8 0 0 1-8 8H27a8 8 0 0 1-8-8V26l4-12Z" fill="${c}" stroke="white" stroke-width="4"/><path d="M21 33c8 4 14 4 23 0" ${white}/>` ,
    冷萃感: `<path d="M20 22h26v11c0 10-6 17-13 17s-13-7-13-17V22Z" fill="${c}" stroke="white" stroke-width="4"/><path d="M24 16h18M27 10h12" ${white}/>` ,
    薄荷冰: `<rect x="17" y="19" width="28" height="28" rx="7" fill="#dff7ff" stroke="white" stroke-width="4" transform="rotate(-10 31 33)"/><path d="M41 17c7-4 12-2 15 3-8 2-12 1-15-3Z" fill="${c}"/>`,
    苦橙尾调: `<circle cx="32" cy="32" r="20" fill="${c}"/><path d="M16 32h32M32 16v32" ${white}/><path d="M20 21c8 9 15 17 24 22" ${white} opacity=".75"/>`,
    奶泡顶: `<path d="M18 36c0-7 5-11 11-10 3-6 13-6 16 0 6 0 10 4 10 10 0 8-7 12-18 12H30c-8 0-12-5-12-12Z" fill="${c}" stroke="white" stroke-width="4"/>`,
    茶香底: `<path d="M31 47c-8-10-9-22 0-32 9 10 8 22 0 32Z" fill="${c}" stroke="white" stroke-width="4"/><path d="M34 31c5-7 11-9 19-6-3 8-10 12-19 6Z" fill="#b8f27c" stroke="white" stroke-width="4"/>`,
    姜汁辣感: `<path d="M32 10l5 15 15-5-10 13 12 10-16-1-6 15-6-15-16 1 12-10-10-13 15 5 5-15Z" fill="${c}" stroke="white" stroke-width="4"/>`,
    骰子: `<rect x="16" y="16" width="32" height="32" rx="8" fill="white" stroke="#5d55b8" stroke-width="4"/><circle cx="25" cy="25" r="3" fill="#5d55b8"/><circle cx="39" cy="25" r="3" fill="#5d55b8"/><circle cx="32" cy="32" r="3" fill="#5d55b8"/><circle cx="25" cy="39" r="3" fill="#5d55b8"/><circle cx="39" cy="39" r="3" fill="#5d55b8"/>`,
    签纸: `<path d="M22 12h26v36l-8-5-8 5-10-5V12Z" fill="${c}" stroke="white" stroke-width="4"/><path d="M28 23h14M28 32h10" ${stroke}/>` ,
    警告标签: `<path d="M32 11l24 42H8l24-42Z" fill="${c}" stroke="white" stroke-width="4"/><path d="M32 25v13M32 45h.1" ${stroke}/>` ,
    条形码: `<rect x="12" y="17" width="40" height="30" rx="5" fill="white" stroke="#5d55b8" stroke-width="4"/><path d="M20 23v18M27 23v18M34 23v18M42 23v18M47 23v18" ${stroke}/>` ,
    小票: `<path d="M20 12h24v40l-5-4-5 4-5-4-5 4-4-3V12Z" fill="${c}" stroke="white" stroke-width="4"/><path d="M26 23h12M26 32h11M26 40h8" ${stroke}/>` ,
    月亮: `<path d="M43 46c-13 2-25-8-25-21 0-7 3-13 8-17-1 15 10 27 25 25-2 6-5 11-8 13Z" fill="${c}" stroke="white" stroke-width="4"/>`,
    冰块: `<rect x="16" y="17" width="32" height="32" rx="9" fill="${c}" stroke="white" stroke-width="4" transform="rotate(-9 32 33)"/><path d="M25 26l14 14M39 25l-14 14" ${white} opacity=".6"/>`,
    吸管: `<path d="M32 52L44 12h9" ${white}/><path d="M27 19h11M24 30h11M21 41h11" stroke="${c}" stroke-width="5" stroke-linecap="round"/>`,
    小伞: `<path d="M12 30c8-16 31-16 40 0H12Z" fill="${c}" stroke="white" stroke-width="4"/><path d="M32 30v24M24 54h8" ${white}/><path d="M20 30c4-9 8-13 12-16 4 3 8 7 12 16" ${white} opacity=".65"/>`,
    独饮: `<path d="M24 14h16l-3 27a5 5 0 0 1-10 0L24 14Z" fill="${c}" stroke="white" stroke-width="4"/><path d="M32 46v8M25 54h14" ${white}/>` ,
    朋友局: `<path d="M19 14h15l-3 26a5 5 0 0 1-9 0L19 14Z" fill="${c}" stroke="white" stroke-width="4"/><path d="M35 16h14l-3 24a5 5 0 0 1-9 0L35 16Z" fill="#ffd2e4" stroke="white" stroke-width="4"/><path d="M27 45v8M42 45v8" ${white}/>` ,
    下班后: `<rect x="16" y="22" width="32" height="24" rx="6" fill="${c}" stroke="white" stroke-width="4"/><path d="M25 22v-5h14v5M22 34h20" ${white}/>` ,
    周末前夜: `<circle cx="32" cy="32" r="20" fill="${c}" stroke="white" stroke-width="4"/><path d="M32 19v14l10 6" ${stroke}/>` ,
    不想回消息: `<rect x="18" y="13" width="28" height="38" rx="7" fill="${c}" stroke="white" stroke-width="4"/><path d="M14 45L50 19" ${white}/>` ,
    天台风: `<path d="M12 25h28c8 0 8-10 1-10-4 0-6 2-7 5M16 38h34c8 0 8 10 1 10-4 0-6-2-7-5" ${white}/>` ,
    便利店: `<path d="M15 29l17-14 17 14v21H15V29Z" fill="${c}" stroke="white" stroke-width="4"/><path d="M23 50V35h18v15M22 28h20" ${stroke}/>` ,
    深夜歌单: `<path d="M29 16v28a7 7 0 1 1-5-7h5" ${white}/><path d="M29 16l18-4v25a7 7 0 1 1-5-7h5V12" ${white}/>` ,
  };
  return `<svg ${common} aria-hidden="true">${icons[label] || `<circle cx="32" cy="32" r="20" fill="${c}" stroke="white" stroke-width="4"/>`}</svg>`;
}

function getStickerIcon(symbol, color) {
  const c = color || "#ffe46d";
  const line = `stroke="#372c80" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"`;
  const soft = `stroke="rgba(255,255,255,.92)" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"`;
  const fill = (body) => `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M18 7h28c6 0 11 5 11 11v28c0 6-5 11-11 11H18C12 57 7 52 7 46V18C7 12 12 7 18 7Z" fill="rgba(255,255,255,.9)"/><path d="M18 7h28c6 0 11 5 11 11v28c0 6-5 11-11 11H18C12 57 7 52 7 46V18C7 12 12 7 18 7Z" ${soft}/>${body}</svg>`;
  const roundFruit = (extra = "") => fill(`<circle cx="32" cy="32" r="18" fill="${c}" ${soft}/><path d="M32 14v36M14 32h36M19 20l26 25M45 20 19 45" ${soft} opacity=".72"/>${extra}`);
  const icons = {
    citrus: roundFruit(`<circle cx="32" cy="32" r="5" fill="rgba(255,255,255,.7)"/>`),
    lime: roundFruit(`<path d="M20 25c9 5 15 5 24 0M20 39c9-5 15-5 24 0" ${soft} opacity=".7"/>`),
    grapefruit: fill(`<circle cx="32" cy="32" r="19" fill="${c}" ${soft}/><path d="M17 32h30M32 13v38M21 20c7 8 13 16 22 24M43 20C36 28 30 36 21 44" ${soft} opacity=".72"/>`),
    berry: fill(`<circle cx="25" cy="27" r="9" fill="#8d6cff" ${soft}/><circle cx="39" cy="28" r="9" fill="#c05fff" ${soft}/><circle cx="31" cy="41" r="10" fill="#7c76e8" ${soft}/><path d="M32 18c4-7 11-8 17-4" ${line}/>`),
    coffee: fill(`<path d="M17 27h27v10c0 8-6 13-13 13s-14-5-14-13V27Z" fill="${c}" ${soft}/><path d="M44 31h5a6 6 0 0 1 0 12h-5" ${line}/><path d="M25 18c-2-4 2-6 0-10M34 18c-2-4 2-6 0-10" ${line} opacity=".75"/>`),
    coconut: fill(`<circle cx="32" cy="33" r="19" fill="#7a5d45" ${soft}/><circle cx="32" cy="33" r="13" fill="${c}"/><circle cx="26" cy="29" r="2.5" fill="#7a5d45"/><circle cx="38" cy="29" r="2.5" fill="#7a5d45"/><path d="M26 40c5 3 9 3 14 0" ${line}/>`),
    lychee: fill(`<circle cx="31" cy="34" r="18" fill="${c}" ${soft}/><circle cx="26" cy="29" r="3" fill="white" opacity=".86"/><path d="M39 15c5-5 10-5 15-1" ${line}/><path d="M38 16c-3 7-2 10 2 15" ${line}/>`),
    peach: fill(`<path d="M33 50c16-8 18-31 4-36-8-3-13 2-15 8-6 0-10 4-10 11 0 11 10 17 21 17Z" fill="${c}" ${soft}/><path d="M38 16c4-5 10-6 16-3" ${line}/>`),
    ginger: fill(`<path d="M17 34c8-15 18-17 28-9 7-1 10 6 5 11 3 6-2 12-9 10-7 7-18 3-17-6-5 1-10-1-7-6Z" fill="${c}" ${soft}/><path d="M28 30c5 2 11 2 16 0M27 39c5 3 10 3 16 0" ${line} opacity=".5"/>`),
    bubble: fill(`<circle cx="24" cy="39" r="8" fill="${c}" ${soft}/><circle cx="41" cy="28" r="11" fill="#a8f4ff" ${soft}/><circle cx="31" cy="18" r="4" fill="white"/>`),
    honey: fill(`<path d="M23 14h18l4 12v20a8 8 0 0 1-8 8H27a8 8 0 0 1-8-8V26l4-12Z" fill="${c}" ${soft}/><path d="M21 34c8 4 14 4 23 0" ${line}/><path d="M28 20h8" ${line}/>`),
    coldbrew: fill(`<path d="M20 22h26v11c0 10-6 17-13 17s-13-7-13-17V22Z" fill="${c}" ${soft}/><path d="M24 16h18M27 10h12M25 34h16" ${line}/>`),
    mintice: fill(`<rect x="17" y="19" width="28" height="28" rx="7" fill="#dff7ff" ${soft} transform="rotate(-10 31 33)"/><path d="M41 17c7-4 12-2 15 3-8 2-12 1-15-3Z" fill="${c}" ${line}/>`),
    bitter: fill(`<circle cx="32" cy="32" r="18" fill="${c}" ${soft}/><path d="M16 32h32M32 16v32M20 21c8 9 15 17 24 22" ${soft} opacity=".72"/>`),
    foam: fill(`<path d="M18 36c0-7 5-11 11-10 3-6 13-6 16 0 6 0 10 4 10 10 0 8-7 12-18 12H30c-8 0-12-5-12-12Z" fill="${c}" ${soft}/><path d="M25 38h24" ${line} opacity=".45"/>`),
    tea: fill(`<path d="M31 47c-8-10-9-22 0-32 9 10 8 22 0 32Z" fill="${c}" ${soft}/><path d="M34 31c5-7 11-9 19-6-3 8-10 12-19 6Z" fill="#b8f27c" ${soft}/>`),
    spark: fill(`<path d="M32 10l5 15 15-5-10 13 12 10-16-1-6 15-6-15-16 1 12-10-10-13 15 5 5-15Z" fill="${c}" ${soft}/>`),
    dice: fill(`<rect x="16" y="16" width="32" height="32" rx="8" fill="${c}" ${line}/><circle cx="25" cy="25" r="3" fill="#372c80"/><circle cx="39" cy="25" r="3" fill="#372c80"/><circle cx="32" cy="32" r="3" fill="#372c80"/><circle cx="25" cy="39" r="3" fill="#372c80"/><circle cx="39" cy="39" r="3" fill="#372c80"/>`),
    ticket: fill(`<path d="M22 13h25v38l-8-5-8 5-9-5V13Z" fill="${c}" ${line}/><path d="M28 24h13M28 33h10" ${line}/>`),
    warning: fill(`<path d="M32 11l23 41H9l23-41Z" fill="${c}" ${soft}/><path d="M32 25v13M32 45h.1" ${line}/>`),
    barcode: fill(`<rect x="13" y="18" width="38" height="28" rx="5" fill="${c}" ${line}/><path d="M20 24v16M26 24v16M31 24v16M39 24v16M45 24v16" ${line}/><path d="M20 51h24" ${line} opacity=".48"/>`),
    receipt: fill(`<path d="M20 12h24v40l-5-4-5 4-5-4-5 4-4-3V12Z" fill="${c}" ${line}/><path d="M26 23h12M26 32h11M26 40h8" ${line}/>`),
    moon: fill(`<path d="M43 46c-13 2-25-8-25-21 0-7 3-13 8-17-1 15 10 27 25 25-2 6-5 11-8 13Z" fill="${c}" ${soft}/>`),
    ice: fill(`<rect x="16" y="17" width="32" height="32" rx="9" fill="${c}" ${soft} transform="rotate(-9 32 33)"/><path d="M25 26l14 14M39 25 25 39" ${soft} opacity=".6"/>`),
    straw: fill(`<path d="M32 52 44 12h9" ${line}/><path d="M27 20h11M24 31h11M21 42h11" stroke="${c}" stroke-width="5" stroke-linecap="round"/>`),
    umbrella: fill(`<path d="M12 30c8-16 31-16 40 0H12Z" fill="${c}" ${soft}/><path d="M32 30v22c0 4 6 4 6 0M20 30c4-9 8-13 12-16 4 3 8 7 12 16" ${line}/>`),
    solo: fill(`<path d="M24 14h16l-3 27a5 5 0 0 1-10 0L24 14Z" fill="${c}" ${soft}/><path d="M32 46v8M25 54h14" ${line}/>`),
    cheers: fill(`<path d="M19 14h15l-3 26a5 5 0 0 1-9 0L19 14Z" fill="${c}" ${soft}/><path d="M35 16h14l-3 24a5 5 0 0 1-9 0L35 16Z" fill="#ffd2e4" ${soft}/><path d="M27 45v8M42 45v8" ${line}/>`),
    briefcase: fill(`<rect x="16" y="22" width="32" height="24" rx="6" fill="${c}" ${soft}/><path d="M25 22v-5h14v5M22 34h20" ${line}/>`),
    clock: fill(`<circle cx="32" cy="32" r="19" fill="${c}" ${soft}/><path d="M32 20v13l9 6" ${line}/>`),
    offline: fill(`<rect x="19" y="13" width="26" height="38" rx="7" fill="${c}" ${soft}/><path d="M15 45 49 19" ${line}/>`),
    wind: fill(`<path d="M12 25h28c8 0 8-10 1-10-4 0-6 2-7 5M16 38h34c8 0 8 10 1 10-4 0-6-2-7-5" ${line}/>`),
    store: fill(`<path d="M15 29l17-14 17 14v21H15V29Z" fill="${c}" ${soft}/><path d="M23 50V35h18v15M22 28h20" ${line}/>`),
    music: fill(`<path d="M29 16v28a7 7 0 1 1-5-7h5" ${line}/><path d="M29 16l18-4v25a7 7 0 1 1-5-7h5V12" ${line}/>`),
  };
  return icons[symbol] || fill(`<circle cx="32" cy="32" r="18" fill="${c}" ${soft}/><path d="M23 32h18" ${line}/>`); 
}

function getLabRecipe() {
  const flavor = selectedStickers.flavor?.label;
  const mood = selectedStickers.mood?.label;
  const object = selectedStickers.object?.label;
  const night = selectedStickers.night?.label;
  const flavorMap = {
    柠檬: { base: "金酒", note: "柠檬汁 / 苏打水 / 柠檬皮油", colors: ["#fff7a8", "#ffd25f", "#91ddff"] },
    青柠: { base: "白朗姆", note: "青柠 / 薄荷 / 气泡水", colors: ["#d9ff90", "#7ee6ca", "#8aa8ff"] },
    葡萄柚: { base: "龙舌兰", note: "葡萄柚汁 / 盐边 / 粉红气泡", colors: ["#ffb1cb", "#ff7fa8", "#8acfff"] },
    莓果: { base: "伏特加", note: "莓果糖浆 / 柠檬 / 碎冰", colors: ["#f5b2ff", "#d579ff", "#70d1ff"] },
    咖啡: { base: "伏特加", note: "冷萃咖啡 / 咖啡利口酒 / 奶泡", colors: ["#e6b06d", "#8b65d8", "#6fd1ff"] },
    椰子: { base: "白朗姆", note: "椰乳 / 菠萝 / 海盐奶盖", colors: ["#fff1bd", "#bdf0de", "#90c7ff"] },
    荔枝: { base: "清酒", note: "荔枝汁 / 玫瑰露 / 透明冰", colors: ["#fde5ff", "#ffbde8", "#8fdfff"] },
    白桃: { base: "起泡酒", note: "白桃泥 / 蜜桃乌龙 / 细气泡", colors: ["#ffd6c7", "#ff9eb5", "#b8d9ff"] },
    姜汁: { base: "威士忌", note: "姜汁汽水 / 青柠 / 蜂蜜", colors: ["#f5c36d", "#ff8f7f", "#8ed6ff"] },
  };
  const moodMap = {
    气泡感: ["清醒逃跑", "低甜高气泡", "约 5-8%"],
    果蜜感: ["甜梦缓冲", "果香更明显", "约 4-7%"],
    冷萃感: ["醒着发光", "加一点咖啡或茶感", "约 8-12%"],
    薄荷冰: ["暂停营业", "冰块多一点，入口轻", "约 4-8%"],
    苦橙尾调: ["成熟皱眉", "苦橙或汤力收尾", "约 8-14%"],
    奶泡顶: ["云朵缓冲", "顶部加奶泡或椰乳", "约 4-8%"],
    茶香底: ["夜茶微醺", "茶香收底，甜度克制", "约 5-9%"],
    姜汁辣感: ["辛辣回神", "姜汁气泡收尾", "约 6-10%"],
  };
  const objectMap = {
    骰子: "杯边放一颗透明骰子糖，今晚随机但不失手。",
    签纸: "杯托夹一张湿掉的签纸，像命运刚从冰桶里捞出来。",
    警告标签: "杯口挂一枚小警告牌，提醒快乐不要超速。",
    条形码: "杯身贴一条银色条码，扫不出价格，只扫出今晚心情。",
    小票: "杯底压一张小票，写着“烦恼已暂存”。",
    月亮: "加一枚月亮形冰块，适合把话说慢一点。",
    冰块: "透明大冰块让整杯酒看起来更冷、更贵、更不好惹。",
    吸管: "加一根弯曲吸管，负责把理智轻轻绕开。",
    小伞: "插一把亮色小伞，让这杯酒假装在度假。",
  };
  const nightMap = {
    独饮: "适合一个人慢慢喝，像给自己留一盏小灯。",
    朋友局: "适合边笑边喝，杯子负责替你记住今晚的荒唐。",
    下班后: "适合下班后第一口，先把肩膀从工位上拆下来。",
    周末前夜: "适合周末前夜，快乐可以提前半小时到场。",
    不想回消息: "适合暂时失联，重要消息明天再做法医鉴定。",
    天台风: "适合吹风，冰块和夜色一起发出很轻的声音。",
    便利店: "适合便利店门口的临时浪漫，塑料袋也能当月亮。",
    深夜歌单: "适合循环同一首歌，喝到副歌时刚好和自己和解。",
  };
  const f = flavorMap[flavor] || { base: "气泡酒", note: "果香 / 冰块 / 气泡", colors: ["#d8cff4", "#ffe064", "#9be7ff"] };
  const m = moodMap[mood] || ["微醺样本", "随性调和", "约 5-9%"];
  const name = flavor ? `${m[0]}${flavor}杯` : "";
  return {
    name,
    colors: f.colors,
    abv: m[2],
    meta: `${f.base} / ${f.note} / ${m[1]}`,
    note: [objectMap[object], nightMap[night]].filter(Boolean).join(" "),
  };
}

function makeLabArchive() {
  const stickers = stickerGroups.map((group) => selectedStickers[group.id]).filter(Boolean);
  if (stickers.length < 4) {
    openModal({
      kicker: "LABEL LAB",
      title: "实验样本不足",
      subtitle: "每类贴纸各选一个，才可以生成实验档案。",
      drink: "还差贴纸",
      abv: `${4 - stickers.length} 项未完成`,
      meta: stickers.map((s) => s.label).join(" / ") || "尚未选择",
      note: "先把风味、情绪、异常物件和夜晚状态都贴上去。",
      againText: "继续贴杯",
      onAgain: closeModal,
    });
    return;
  }
  const name = buildFlavorName(selectedStickers.flavor.label, selectedStickers.mood.label);
  const recipe = getLabRecipe();
  openModal({
    kicker: "EXPERIMENT FILE",
    title: `${recipe.name || name} 档案`,
    subtitle: `由 ${stickers.map((s) => s.label).join(" / ")} 调出的专属微醺样本。`,
    drink: recipe.name || name,
    abv: recipe.abv,
    meta: recipe.meta,
    note: recipe.note || `${name}带着${selectedStickers.object.label}的可疑编号，适合${selectedStickers.night.label}。请在快乐还没过期前打开。`,
    againText: "重新生成",
    onAgain: () => {
      resetLab();
      closeModal();
    },
  });
}

function resetLab() {
  selectedStickers = {};
  updateLab();
  renderStickerOptions();
}

document.getElementById("enterBtn").addEventListener("click", () => showScreen("center"));
document.getElementById("backHomeBtn").addEventListener("click", () => showScreen("hero"));
document.getElementById("prevMode").addEventListener("click", () => rotateMode(-1));
document.getElementById("nextMode").addEventListener("click", () => rotateMode(1));
document.getElementById("openModeBtn").addEventListener("click", () => showScreen(modeData[activeMode].id));
document.getElementById("drawBtn").addEventListener("click", drawInspiration);
document.getElementById("quizForm").addEventListener("submit", handleQuiz);
document.getElementById("makeLabBtn").addEventListener("click", makeLabArchive);
document.getElementById("resetLabBtn").addEventListener("click", resetLab);
if (musicToggle) musicToggle.addEventListener("click", toggleMusic);
if (bgMusic) {
  bgMusic.addEventListener("ended", () => setMusicButtonState(false));
  bgMusic.addEventListener("error", () => setMusicButtonState(false, true));
}
document.getElementById("modalAgainBtn").addEventListener("click", () => {
  if (modalAgainHandler) modalAgainHandler();
});
document.querySelectorAll("[data-close-modal]").forEach((button) => button.addEventListener("click", closeModal));
document.querySelectorAll("[data-go-center]").forEach((button) => button.addEventListener("click", () => showScreen("center")));
document.querySelectorAll("[data-jump]").forEach((button) => {
  button.addEventListener("click", () => showScreen(button.dataset.jump));
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

document.body.dataset.screen = currentScreen;
renderModeOrbit();
renderQuiz();
renderCategories();
renderShelf();
renderStickerTabs();
renderStickerOptions();
updateLab();
updateDock();
attemptAutoMusic();
