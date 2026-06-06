const guides = [
  {
    title: "新手开荒 72 小时路线：主队、土地与建筑优先级",
    game: "三国：谋定天下",
    category: "开荒",
    updated: "2026-06-06",
    time: "7 分钟",
    summary: "用低战损推进作为核心目标，把第一天到第三天最容易浪费资源的节点拆开说明。",
    tags: ["开荒", "低战损", "建筑"],
    keywords: "三国谋定天下新手开荒 谋定天下开荒顺序 低战损打地",
    slug: "beginner-opening.html"
  },
  {
    title: "平民阵容搭配思路：先确定职责，再追求强度上限",
    game: "三国：谋定天下",
    category: "阵容",
    updated: "2026-06-06",
    time: "6 分钟",
    summary: "不按单个武将排名硬凑队伍，而是从输出、承伤、恢复、控制和增益五类职责搭框架。",
    tags: ["平民", "阵容", "职责"],
    keywords: "三国谋定天下平民阵容 谋定天下武将搭配 阵容思路",
    slug: "civilian-lineup.html"
  },
  {
    title: "职业选择指南：按上线时间和同盟定位做决定",
    game: "三国：谋定天下",
    category: "职业",
    updated: "2026-06-06",
    time: "5 分钟",
    summary: "把职业选择从喜好题变成运营题：你每天能上线多久、同盟缺什么、赛季目标是什么。",
    tags: ["职业", "同盟", "定位"],
    keywords: "三国谋定天下职业选择 谋定天下职业推荐 新手职业",
    slug: "profession-choice.html"
  },
  {
    title: "资源优先级：铜币、粮草、战法经验怎么花更稳",
    game: "三国：谋定天下",
    category: "资源",
    updated: "2026-06-06",
    time: "6 分钟",
    summary: "前期资源最怕平均分配。本文给出主队、二队、建筑和科技之间的投入顺序。",
    tags: ["资源", "战法", "铜币"],
    keywords: "三国谋定天下资源攻略 谋定天下铜币 谋定天下战法经验",
    slug: "resource-priority.html"
  },
  {
    title: "低战损打地方法：侦查、兵种克制与撤退判断",
    game: "三国：谋定天下",
    category: "开荒",
    updated: "2026-06-06",
    time: "6 分钟",
    summary: "开荒速度不是盲打高等级地，而是在可控战损内滚动资源，减少无意义的征兵等待。",
    tags: ["打地", "侦查", "战损"],
    keywords: "三国谋定天下低战损 谋定天下打地技巧 谋定天下侦查",
    slug: "low-loss-land.html"
  },
  {
    title: "城建升级顺序：先解锁收益，再补长期成长",
    game: "三国：谋定天下",
    category: "资源",
    updated: "2026-06-06",
    time: "5 分钟",
    summary: "把城建分成推进型、资源型和长期型，避免哪里能点就点，导致关键节点卡住。",
    tags: ["城建", "升级", "收益"],
    keywords: "三国谋定天下城建顺序 谋定天下建筑升级 主城发展",
    slug: "city-building.html"
  },
  {
    title: "同盟赛季协作：铺路、集结、补位与资源州节奏",
    game: "三国：谋定天下",
    category: "赛季",
    updated: "2026-06-06",
    time: "7 分钟",
    summary: "单人开荒决定下限，同盟协作决定赛季上限。本文梳理普通成员也能执行的协作动作。",
    tags: ["同盟", "赛季", "协作"],
    keywords: "三国谋定天下同盟攻略 谋定天下赛季节奏 资源州",
    slug: "alliance-season.html"
  },
  {
    title: "武将与战法调整清单：换将前先检查四个问题",
    game: "三国：谋定天下",
    category: "阵容",
    updated: "2026-06-06",
    time: "5 分钟",
    summary: "阵容卡住时不要急着全盘推倒，先检查速度、续航、输出环境和战法触发条件。",
    tags: ["武将", "战法", "调整"],
    keywords: "三国谋定天下武将调整 谋定天下战法搭配 阵容优化",
    slug: "hero-team-build.html"
  },
  {
    title: "新手第一天任务顺序：先主线、再打地、最后补资源",
    game: "三国：谋定天下",
    category: "开荒",
    updated: "2026-06-06",
    time: "8 分钟",
    summary: "把第一天要做的主线、打地、征兵、建筑和资源投入排出优先级，避免被零散红点带乱。",
    tags: ["第一天", "任务", "开服"],
    keywords: "三国谋定天下第一天 谋定天下新手任务顺序 开服第一天",
    slug: "day-one-task-order.html"
  },
  {
    title: "平民二队什么时候开始练：别让二队拖慢主队",
    game: "三国：谋定天下",
    category: "阵容",
    updated: "2026-06-06",
    time: "8 分钟",
    summary: "用三个信号判断二队开启时机，让二队承担低风险任务，而不是抢走主队关键资源。",
    tags: ["二队", "平民", "资源"],
    keywords: "三国谋定天下二队 平民二队 二队什么时候练",
    slug: "second-team-timing.html"
  },
  {
    title: "主队卡地怎么办：从战报里找真正短板",
    game: "三国：谋定天下",
    category: "开荒",
    updated: "2026-06-06",
    time: "8 分钟",
    summary: "卡地后先停手复盘，从兵种、承伤、输出、战法触发和资源投入五个方向排查。",
    tags: ["卡地", "战报", "复盘"],
    keywords: "三国谋定天下卡地 主队打不过 战报复盘",
    slug: "stuck-land-review.html"
  },
  {
    title: "战法经验优先级：先升稳定收益，再升锦上添花",
    game: "三国：谋定天下",
    category: "资源",
    updated: "2026-06-06",
    time: "8 分钟",
    summary: "战法经验前期很紧，优先给能稳定降低战损、提高输出环境或保证关键节奏的技能。",
    tags: ["战法", "经验", "优先级"],
    keywords: "三国谋定天下战法经验 战法先升什么 战法优先级",
    slug: "tactic-exp-priority.html"
  },
  {
    title: "休闲玩家一周发展路线：低压力也能稳步推进",
    game: "三国：谋定天下",
    category: "赛季",
    updated: "2026-06-06",
    time: "7 分钟",
    summary: "休闲玩家按每日主队、资源、同盟和周末复盘推进，不追极限也能保持长期进度。",
    tags: ["休闲", "一周", "日常"],
    keywords: "三国谋定天下休闲玩家 一周路线 每日上线",
    slug: "casual-weekly-route.html"
  },
  {
    title: "同盟铺路成员日常清单：目标、体力、路线和反馈",
    game: "三国：谋定天下",
    category: "赛季",
    updated: "2026-06-06",
    time: "7 分钟",
    summary: "普通铺路成员每天按目标、体力、路线和反馈执行，减少重复路线和体力浪费。",
    tags: ["铺路", "同盟", "清单"],
    keywords: "三国谋定天下铺路 同盟铺路 铺路清单",
    slug: "alliance-road-daily.html"
  },
  {
    title: "资源州前需要准备什么：队伍、体力、路线和同盟节奏",
    game: "三国：谋定天下",
    category: "赛季",
    updated: "2026-06-06",
    time: "8 分钟",
    summary: "资源州前提前检查主队、体力、资源和同盟路线，避免关键行动开始时准备不足。",
    tags: ["资源州", "赛季", "准备"],
    keywords: "三国谋定天下资源州 资源州准备 赛季推进",
    slug: "resource-state-prep.html"
  },
  {
    title: "赛季中期阵容转型：别把开荒队硬用到底",
    game: "三国：谋定天下",
    category: "阵容",
    updated: "2026-06-06",
    time: "8 分钟",
    summary: "开荒队解决前期稳定问题，中期要按对战环境、同盟需求和武将池逐步转型。",
    tags: ["转型", "赛季中期", "阵容"],
    keywords: "三国谋定天下赛季中期 阵容转型 开荒队转型",
    slug: "mid-season-transition.html"
  },
  {
    title: "低战损复盘模板：看战报时别只看输赢",
    game: "三国：谋定天下",
    category: "阵容",
    updated: "2026-06-06",
    time: "7 分钟",
    summary: "用损兵、出手顺序、战法触发、承伤和调整结论五个字段复盘战报。",
    tags: ["战报", "模板", "低战损"],
    keywords: "三国谋定天下战报模板 低战损复盘 战报怎么看",
    slug: "battle-report-template.html"
  },
  {
    title: "建筑资源不够怎么办：先判断是真缺还是花错",
    game: "三国：谋定天下",
    category: "资源",
    updated: "2026-06-06",
    time: "7 分钟",
    summary: "资源短缺时先判断是真缺还是升级顺序错误，再暂停低收益建筑、补当前瓶颈。",
    tags: ["建筑", "资源", "短缺"],
    keywords: "三国谋定天下建筑资源不够 资源短缺 建筑优先级",
    slug: "building-resource-shortage.html"
  },
  {
    title: "职业选错怎么调整：先改玩法重点，再考虑重选",
    game: "三国：谋定天下",
    category: "职业",
    updated: "2026-06-06",
    time: "7 分钟",
    summary: "职业不适配不代表账号废了，先判断上线时间、同盟分工和玩法重点是否匹配。",
    tags: ["职业", "调整", "新手"],
    keywords: "三国谋定天下职业选错 职业调整 职业不适合",
    slug: "wrong-profession-adjust.html"
  },
  {
    title: "平民玩家每日必做：主队、资源、同盟和复盘四件事",
    game: "三国：谋定天下",
    category: "资源",
    updated: "2026-06-06",
    time: "7 分钟",
    summary: "每天时间有限时，先处理主队状态、资源消耗、同盟任务和关键战报复盘。",
    tags: ["每日", "平民", "清单"],
    keywords: "三国谋定天下每日必做 平民日常 日常清单",
    slug: "daily-checklist.html"
  }
];

const games = [
  ["开荒路线", "首日主队成型、土地推进、征兵节奏和建筑解锁。", "核心"],
  ["武将阵容", "从职责、兵种、战法触发和续航能力拆解队伍。", "高需求"],
  ["职业选择", "按上线时间、同盟分工和赛季目标选择发展方向。", "新手"],
  ["资源规划", "铜币、粮草、战法经验、建筑资源的优先级。", "长尾"],
  ["打地技巧", "侦查、克制、撤退和补刀，降低无效战损。", "实用"],
  ["城建升级", "先满足推进节点，再补长期产出和功能建筑。", "稳定"],
  ["同盟协作", "铺路、集结、补位、资源州和赛季沟通节奏。", "赛季"],
  ["合规运营", "原创文字、生成配图、无官方素材、无搬运内容。", "必做"]
];

const guideGrid = document.querySelector("#guideGrid");
const gameGrid = document.querySelector("#gameGrid");
const searchInput = document.querySelector("#searchInput");
const emptyState = document.querySelector("#emptyState");
const filterTabs = [...document.querySelectorAll(".filter-tab")];
const backTop = document.querySelector("#backTop");

let activeCategory = "全部";

function renderGuides() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = guides.filter((guide) => {
    const matchesCategory = activeCategory === "全部" || guide.category === activeCategory;
    const haystack = `${guide.title} ${guide.game} ${guide.category} ${guide.summary} ${guide.tags.join(" ")} ${guide.keywords}`.toLowerCase();
    return matchesCategory && haystack.includes(query);
  });

  guideGrid.innerHTML = filtered.map((guide) => `
    <article class="guide-card">
      <div class="guide-meta">
        <span class="pill">${guide.category}</span>
        <span>${guide.game}</span>
        <span>${guide.updated}</span>
      </div>
      <h3>${guide.title}</h3>
      <p>${guide.summary}</p>
      <div class="tag-row">
        ${guide.tags.map((tag) => `<span class="tag">#${tag}</span>`).join("")}
      </div>
      <div class="card-footer">
        <span class="reading-time">${guide.time}</span>
        <a class="read-button" href="guides/${guide.slug}">阅读全文</a>
      </div>
    </article>
  `).join("");

  emptyState.hidden = filtered.length !== 0;
}

function renderGames() {
  gameGrid.innerHTML = games.map(([name, desc, score]) => `
    <article class="game-card">
      <strong>${name}</strong>
      <p>${desc}</p>
      <span class="score">${score}</span>
    </article>
  `).join("");
}

filterTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activeCategory = tab.dataset.category;
    filterTabs.forEach((item) => item.classList.toggle("active", item === tab));
    renderGuides();
  });
});

searchInput.addEventListener("input", renderGuides);

backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  backTop.classList.toggle("show", window.scrollY > 500);
});

renderGuides();
renderGames();
