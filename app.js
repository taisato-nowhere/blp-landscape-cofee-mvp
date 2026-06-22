const APP_PASSWORD = 'landscape07'
const STORAGE_KEY = 'blp_landscape_mvp_state_v1'
const AUTH_KEY = 'blp_landscape_mvp_auth'
const LAUNCH_DATE = '2026-08-29'

const phases = [
  { id: 'define', code: '01', label: 'Define', title: 'ブランド核と語り口', purpose: 'ブランドの核を定義する' },
  { id: 'build', code: '02', label: 'Build', title: 'クラファンと導線作成', purpose: '発信・素材・クラファン・導線を作る' },
  { id: 'engage', code: '03', label: 'Engage', title: 'SNSと協力者巻き込み', purpose: '認知と支援を集める' },
  { id: 'countdown', code: '04', label: 'Countdown', title: '公開前の追い込み', purpose: '来店直前の熱量を作る' },
  { id: 'launch', code: '05', label: 'Launch', title: '開業当日の運用', purpose: 'ローンチ当日の拡散を拾い上げる' },
  { id: 'amplify', code: '06', label: 'Amplify', title: '初月の改善と定着', purpose: '初回来店を継続客に変える' },
]

const contentTypes = [
  { id: 'instagram', label: 'Instagram', help: '投稿文とストーリーズ' },
  { id: 'crowdfunding', label: 'クラファン本文', help: 'ページ本文と更新文' },
  { id: 'note', label: 'note', help: '背景と思想の長文' },
  { id: 'dm', label: 'DM/依頼', help: '協力者向け文面' },
]

const tasks = [
  task(1, 'Brand', 'ブランド背景整理', -90, -85, '2026-05-31', '2026-06-05', 'define'),
  task(2, 'Brand', 'ブランドコンセプト作り', -85, -75, '2026-06-05', '2026-06-15', 'define'),
  task(3, 'Brand', 'ブランドストーリー制作', -85, -75, '2026-06-05', '2026-06-15', 'define'),
  task(4, 'Brand', 'ブランド名制作', -74, -65, '2026-06-16', '2026-06-25', 'build'),
  task(5, 'Brand', 'ブランドロゴ制作', -64, -55, '2026-06-26', '2026-07-05', 'build'),
  task(6, 'Brand', 'ブランドレギュレーション決定', -54, -50, '2026-07-06', '2026-07-10', 'build'),
  task(7, 'Marketing', 'マーケティング戦略立案', -74, -60, '2026-06-16', '2026-06-30', 'build'),
  task(8, 'Marketing', 'ペルソナ設計', -65, -60, '2026-06-25', '2026-06-30', 'build'),
  task(9, 'Marketing', '事業計画策定', -69, -60, '2026-06-21', '2026-06-30', 'build'),
  task(10, 'Marketing', '資金調達支援', -59, -30, '2026-07-01', '2026-07-30', 'build'),
  task(11, 'Marketing', '補助金支援', -59, -30, '2026-07-01', '2026-07-30', 'build'),
  task(12, 'Material', 'HP作成', -59, -45, '2026-07-01', '2026-07-15', 'build'),
  task(13, 'Material', '各種ページ作成（Gmap、その他サイトなど）', -59, -45, '2026-07-01', '2026-07-15', 'build'),
  task(14, 'Material', 'SNS用静止画作成', -74, -45, '2026-06-16', '2026-07-15', 'build'),
  task(15, 'Material', 'SNS用動画作成', -74, -45, '2026-06-16', '2026-07-15', 'build'),
  task(16, 'Material', 'ショートドラマ_企画', -75, -65, '2026-06-15', '2026-06-25', 'build'),
  task(17, 'Material', 'ショートドラマ_撮影', -69, -50, '2026-06-21', '2026-07-10', 'build'),
  task(18, 'Material', 'ショートドラマ_編集', -49, -45, '2026-07-11', '2026-07-15', 'build'),
  task(19, 'Instagram', 'アカウントコンセプト設計', -74, -65, '2026-06-16', '2026-06-25', 'build'),
  task(20, 'Instagram', '配信戦略策定', -65, -55, '2026-06-25', '2026-07-05', 'build'),
  task(21, 'Instagram', 'アカウント制作', -55, -45, '2026-07-05', '2026-07-15', 'build'),
  task(22, 'Instagram', 'feed配信/2d', -44, -15, '2026-07-16', '2026-08-14', 'engage'),
  task(23, 'Instagram', 'Stories配信/2d程度', -44, -15, '2026-07-16', '2026-08-14', 'engage'),
  task(24, 'Instagram', 'Reel配信/1w程度', -44, -15, '2026-07-16', '2026-08-14', 'engage'),
  task(25, 'Instagram', 'カウントダウン配信', -14, -1, '2026-08-15', '2026-08-28', 'countdown'),
  task(26, 'Instagram', 'ローンチ配信（メンション拾うなどStories中心）', 1, 1, '2026-08-30', '2026-08-30', 'launch'),
  task(27, 'Instagram', '事後配信（毎日アクション）', 1, 30, '2026-08-30', '2026-09-28', 'amplify'),
  task(28, 'CloudFunding', 'クラファンテーマ企画', -75, -65, '2026-06-15', '2026-06-25', 'build'),
  task(29, 'CloudFunding', 'リターン設計', -65, -55, '2026-06-25', '2026-07-05', 'build'),
  task(30, 'CloudFunding', '画像やロゴなどの作成', -55, -50, '2026-07-05', '2026-07-10', 'build'),
  task(31, 'CloudFunding', 'ページ作成', -55, -45, '2026-07-05', '2026-07-15', 'build'),
  task(32, 'CloudFunding', '公開', -45, -45, '2026-07-15', '2026-07-15', 'build'),
  task(33, 'CloudFunding', '公開ページの拡散（DM、SNS等）', -44, -35, '2026-07-16', '2026-07-25', 'engage'),
  task(34, 'CloudFunding', 'CF受付プッシュ（DM、SNS投稿等）', -40, -1, '2026-07-20', '2026-08-28', 'engage'),
  task(35, 'Community', 'LINE＠の作成', -60, -45, '2026-06-30', '2026-07-15', 'build'),
  task(36, 'Community', 'SNSと連動したLINEのフォロワー集め', -44, -14, '2026-07-16', '2026-08-15', 'engage'),
  task(37, 'Community', 'アンケート等の実施（IG、LINE）', -14, 30, '2026-08-15', '2026-09-28', 'countdown'),
  task(38, 'Community', 'プレゼントキャンペーンの実施（IG、LINE）', -14, 30, '2026-08-15', '2026-09-28', 'countdown'),
  task(39, 'Promotion', '広告運用_運用計画作成', -44, -30, '2026-07-16', '2026-07-30', 'engage'),
  task(40, 'Promotion', '広告運用_運用', -29, 1, '2026-07-31', '2026-08-30', 'engage'),
  task(41, 'Promotion', '広告運用_レビュー', 1, 15, '2026-08-30', '2026-09-13', 'amplify'),
  task(42, 'Promotion', 'プレローンチ_企画', -44, -30, '2026-07-16', '2026-07-30', 'engage'),
  task(43, 'Promotion', 'プレローンチ_準備', -30, -15, '2026-07-30', '2026-08-14', 'engage'),
  task(44, 'Promotion', 'プレローンチ_実施', -14, -10, '2026-08-15', '2026-08-19', 'countdown'),
  task(45, 'Promotion', 'プレローンチ_レビュー', -9, -5, '2026-08-20', '2026-08-24', 'countdown'),
  task(46, 'Promotion', 'インフルエンサー_アサイン', -30, -15, '2026-07-30', '2026-08-14', 'engage'),
  task(47, 'Promotion', 'インフルエンサー_派遣・投稿', -14, 3, '2026-08-15', '2026-09-01', 'countdown'),
  task(48, 'Promotion', 'インフルエンサー_レビュー', 3, 10, '2026-09-01', '2026-09-08', 'amplify'),
  task(49, 'Promotion', 'プレスリリース（告知）_作成', -44, -35, '2026-07-16', '2026-07-25', 'engage'),
  task(50, 'Promotion', 'プレスリリース（告知）_設定', -34, -30, '2026-07-26', '2026-07-30', 'engage'),
  task(51, 'Promotion', 'プレスリリース（告知）_配信', -30, -30, '2026-07-30', '2026-07-30', 'engage'),
  task(52, 'Promotion', 'プレスリリース（ローンチ）_作成', -14, -5, '2026-08-15', '2026-08-24', 'countdown'),
  task(53, 'Promotion', 'プレスリリース（ローンチ）_設定', -4, 1, '2026-08-25', '2026-08-30', 'countdown'),
  task(54, 'Promotion', 'プレスリリース（ローンチ）_配信', 1, 1, '2026-08-30', '2026-08-30', 'launch'),
  task(55, 'Promotion', 'メディアPR_仕込み', -30, -15, '2026-07-30', '2026-08-14', 'engage'),
  task(56, 'Promotion', 'メディアPR_取材', -14, 3, '2026-08-15', '2026-09-01', 'countdown'),
  task(57, 'Promotion', 'レビューキャンペーン_企画', -15, -1, '2026-08-14', '2026-08-28', 'countdown'),
  task(58, 'Promotion', 'レビューキャンペーン_実施', 1, 30, '2026-08-30', '2026-09-28', 'amplify'),
]

const state = loadState()
let selectedPhase = state.selectedPhase || 'build'
let selectedMode = state.selectedMode || 'today'
let selectedSheet = state.selectedSheet || 'gantt'
let selectedContentType = state.selectedContentType || 'instagram'
let showCompletedOnly = false

function task(id, category, name, startDay, endDay, startDate, endDate, phase) {
  return { id, category, name, startDay, endDay, startDate, endDate, phase }
}

function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
    return {
      statuses: parsed.statuses || {},
      drafts: parsed.drafts || [],
      selectedPhase: parsed.selectedPhase,
      selectedMode: parsed.selectedMode,
      selectedSheet: parsed.selectedSheet,
      selectedContentType: parsed.selectedContentType,
    }
  } catch {
    return { statuses: {}, drafts: [] }
  }
}

function saveState() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      statuses: state.statuses,
      drafts: state.drafts,
      selectedPhase,
      selectedMode,
      selectedSheet,
      selectedContentType,
    }),
  )
}

function getInitialStatus(item) {
  const today = startOfDay(new Date())
  const start = parseDate(item.startDate)
  const end = parseDate(item.endDate)
  if (end < today) return 'done'
  if (start <= today && today <= end) return 'doing'
  return 'todo'
}

function getStatus(item) {
  return state.statuses[item.id] || getInitialStatus(item)
}

function setStatus(id, status) {
  state.statuses[id] = status
  saveState()
  render()
}

function parseDate(value) {
  return new Date(`${value}T00:00:00`)
}

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

function daysBetween(a, b) {
  return Math.ceil((parseDate(b) - startOfDay(a)) / 86400000)
}

function formatDate(value) {
  const d = parseDate(value)
  return `${d.getMonth() + 1}/${d.getDate()}`
}

function statusLabel(status) {
  return {
    todo: '未着手',
    doing: '進行中',
    waiting: '判断待ち',
    done: '完了',
  }[status] || status
}

function categoryLabel(category) {
  return {
    Brand: 'ブランド',
    Marketing: '戦略',
    Material: '素材',
    Instagram: 'Instagram',
    CloudFunding: 'クラファン',
    Community: 'コミュニティ',
    Promotion: 'PR/販促',
  }[category] || category
}

function isContentTask(item) {
  return ['Instagram', 'CloudFunding', 'Promotion', 'Community'].includes(item.category)
    || /作成|制作|配信|投稿|DM|SNS|ページ|コピー|note|プレスリリース/.test(item.name)
}

function phaseTasks() {
  return tasks.filter(item => item.phase === selectedPhase)
}

function filteredPhaseTasks() {
  const selectedStatus = document.querySelector('#statusFilter')?.value || 'all'
  return phaseTasks().filter(item => selectedStatus === 'all' || getStatus(item) === selectedStatus)
}

function taskScore(item) {
  const status = getStatus(item)
  const urgency = Math.abs(daysBetween(new Date(), item.endDate))
  const weight = status === 'waiting' ? -100 : status === 'doing' ? -50 : 0
  return weight + urgency
}

function modeTasks(mode = selectedMode) {
  const items = phaseTasks()
  if (mode === 'stalled') {
    return items
      .filter(item => getStatus(item) === 'waiting')
      .concat(items.filter(item => getStatus(item) !== 'done' && daysBetween(new Date(), item.endDate) < 0))
      .slice(0, 8)
  }
  if (mode === 'content') {
    return items.filter(item => getStatus(item) !== 'done' && isContentTask(item)).slice(0, 8)
  }
  if (mode === 'all') return items
  return items
    .filter(item => getStatus(item) !== 'done')
    .sort((a, b) => taskScore(a) - taskScore(b))
    .slice(0, 3)
}

function render() {
  renderChrome()
  renderModes()
  renderQueue()
  renderDashboard()
  renderStudio()
  saveState()
}

function renderChrome() {
  const phase = phases.find(item => item.id === selectedPhase)
  document.querySelector('#totalTasks').textContent = String(tasks.length)
  document.querySelector('#phaseEyebrow').textContent = `${phase.code} ${phase.label}`
  document.querySelector('#phasePurpose').textContent = phase.purpose
  document.querySelector('#daysToLaunch').textContent = `D-${Math.max(daysBetween(new Date(), LAUNCH_DATE), 0)}`

  const phaseNav = document.querySelector('#phaseNav')
  phaseNav.innerHTML = phases.map(item => `
    <button class="phase-button ${item.id === selectedPhase ? 'active' : ''}" data-phase="${item.id}" type="button">
      <strong>${item.code} ${item.label}</strong>
      <span>${item.title}</span>
    </button>
  `).join('')

  phaseNav.querySelectorAll('[data-phase]').forEach(button => {
    button.addEventListener('click', () => {
      selectedPhase = button.dataset.phase
      selectedMode = 'today'
      selectedSheet = 'gantt'
      showCompletedOnly = false
      render()
    })
  })
}

function renderModes() {
  const counts = {
    today: modeTasks('today').length,
    stalled: modeTasks('stalled').length,
    content: modeTasks('content').length,
    all: phaseTasks().length,
  }
  const modes = [
    { id: 'today', label: `今日やる ${counts.today}` },
    { id: 'stalled', label: `止まり ${counts.stalled}` },
    { id: 'content', label: `作る文章 ${counts.content}` },
    { id: 'all', label: '全体' },
  ]
  const tabs = document.querySelector('#modeTabs')
  tabs.innerHTML = modes.map(item => `
    <button class="pill ${item.id === selectedMode ? 'active' : ''}" data-mode="${item.id}" type="button">${item.label}</button>
  `).join('')
  tabs.querySelectorAll('[data-mode]').forEach(button => {
    button.addEventListener('click', () => {
      selectedMode = button.dataset.mode
      showCompletedOnly = false
      render()
    })
  })
}

function renderQueue() {
  const phase = phases.find(item => item.id === selectedPhase)
  const tasksForMode = showCompletedOnly
    ? phaseTasks().filter(item => getStatus(item) === 'done')
    : modeTasks()
  const first = tasksForMode[0]
  const stalled = modeTasks('stalled')[0]
  const content = modeTasks('content')[0]

  const look = stalled || first || phaseTasks()[0]
  document.querySelector('#lookTitle').textContent = look ? `${look.name}を確認` : `${phase.label}を確認`
  document.querySelector('#lookDescription').textContent = look
    ? `${categoryLabel(look.category)} / ${formatDate(look.startDate)}-${formatDate(look.endDate)}。次に進むための状態を見ます。`
    : 'このフェーズのタスクはまだありません。'

  const titleMap = {
    today: `今日やる ${modeTasks('today').length}件`,
    stalled: `止まり ${modeTasks('stalled').length}件`,
    content: `作る文章 ${modeTasks('content').length}件`,
    all: `${phase.label} 全体 ${phaseTasks().length}件`,
  }
  document.querySelector('#queueTitle').textContent = showCompletedOnly ? '完了したタスク' : titleMap[selectedMode]
  document.querySelector('#queueSub').textContent = showCompletedOnly
    ? '今日やる一覧から外れたタスク。Dashboardにも残ります。'
    : '上の切り替えで表示するタスクを絞れます。'
  document.querySelector('#showCompleted').textContent = showCompletedOnly ? '通常表示へ戻る' : '完了を見る'
  document.querySelector('#showCompleted').onclick = () => {
    showCompletedOnly = !showCompletedOnly
    renderQueue()
  }

  const radar = document.querySelector('#actionRadar')
  radar.innerHTML = `
    <div class="radar-card ${stalled ? 'hot' : 'next'}">
      <span>${stalled ? 'Blocked' : 'First Action'}</span>
      <strong>${stalled ? stalled.name : (first?.name || '確認するタスクなし')}</strong>
      <small>${stalled ? '判断待ちまたは期限超過。先に詰まりを外すと全体が進みます。' : '今日の最初の一手として扱います。'}</small>
    </div>
    <div class="radar-card next">
      <span>Text Next</span>
      <strong>${content?.name || '必要な文章は未検出'}</strong>
      <small>文章が必要なタスクはText Studioに渡して下書きできます。</small>
    </div>
  `

  const queueTabs = document.querySelector('#queueTabs')
  queueTabs.innerHTML = [
    { id: 'today', label: '今日やる' },
    { id: 'stalled', label: '止まり' },
    { id: 'content', label: '作る文章' },
  ].map(item => `
    <button class="queue-tab ${item.id === selectedMode && !showCompletedOnly ? 'active' : ''}" data-queue="${item.id}" type="button">${item.label}</button>
  `).join('')
  queueTabs.querySelectorAll('[data-queue]').forEach(button => {
    button.addEventListener('click', () => {
      selectedMode = button.dataset.queue
      showCompletedOnly = false
      render()
    })
  })

  const list = document.querySelector('#focusTasks')
  if (!tasksForMode.length) {
    list.innerHTML = `<article class="focus-task"><div></div><div><h3>表示するタスクはありません</h3><p>別の表示に切り替えるか、Spreadsheet Dashboardで全体を確認してください。</p></div></article>`
    return
  }
  list.innerHTML = tasksForMode.map((item, index) => renderFocusTask(item, index)).join('')
  list.querySelectorAll('[data-status]').forEach(select => {
    select.addEventListener('change', () => setStatus(Number(select.dataset.status), select.value))
  })
  list.querySelectorAll('[data-done]').forEach(button => {
    button.addEventListener('click', () => setStatus(Number(button.dataset.done), 'done'))
  })
  list.querySelectorAll('[data-write]').forEach(button => {
    button.addEventListener('click', () => {
      selectedContentType = inferContentType(tasks.find(item => item.id === Number(button.dataset.write)))
      document.querySelector('#draftPreview').value = buildDraft(selectedContentType, tasks.find(item => item.id === Number(button.dataset.write)))
      renderStudio()
    })
  })
}

function renderFocusTask(item, index) {
  const status = getStatus(item)
  const tagClass = status === 'waiting' ? 'risk' : status === 'doing' ? 'warn' : ''
  const tag = showCompletedOnly ? '完了' : selectedMode === 'today' ? `${index + 1}番目` : statusLabel(status)
  return `
    <article class="focus-task">
      <div class="task-tag ${tagClass}">${tag}</div>
      <div>
        <h3>${item.name}</h3>
        <p>${categoryLabel(item.category)} / ${formatDate(item.startDate)}-${formatDate(item.endDate)} / ${phases.find(p => p.id === item.phase).label}</p>
      </div>
      <div class="task-actions">
        <select data-status="${item.id}" aria-label="${item.name}の状態">
          ${['todo', 'doing', 'waiting', 'done'].map(statusId => `<option value="${statusId}" ${statusId === status ? 'selected' : ''}>${statusLabel(statusId)}</option>`).join('')}
        </select>
        ${isContentTask(item) ? `<button data-write="${item.id}" type="button">文章</button>` : ''}
        ${status !== 'done' ? `<button data-done="${item.id}" type="button">完了</button>` : ''}
      </div>
    </article>
  `
}

function renderDashboard() {
  const sheetTabs = document.querySelector('#sheetTabs')
  const tabs = [
    { id: 'gantt', label: 'ガント' },
    { id: 'list', label: 'タスク一覧' },
    { id: 'phase', label: 'フェーズ' },
    { id: 'content', label: '投稿/制作物' },
  ]
  sheetTabs.innerHTML = tabs.map(item => `
    <button class="sheet-tab ${item.id === selectedSheet ? 'active' : ''}" data-sheet="${item.id}" type="button">${item.label}</button>
  `).join('')
  sheetTabs.querySelectorAll('[data-sheet]').forEach(button => {
    button.addEventListener('click', () => {
      selectedSheet = button.dataset.sheet
      renderDashboard()
      saveState()
    })
  })
  document.querySelector('#statusFilter').onchange = renderDashboard

  const phaseItems = phaseTasks()
  const completed = phaseItems.filter(item => getStatus(item) === 'done').length
  const waiting = phaseItems.filter(item => getStatus(item) === 'waiting').length
  const contentCount = phaseItems.filter(isContentTask).length
  document.querySelector('#metrics').innerHTML = [
    ['総タスク', phaseItems.length],
    ['完了', completed],
    ['判断待ち', waiting],
    ['制作する文章', contentCount],
  ].map(([label, value]) => `<div class="metric"><strong>${value}</strong><span>${label}</span></div>`).join('')

  const body = document.querySelector('#dashboardBody')
  if (selectedSheet === 'gantt') body.innerHTML = renderGantt(filteredPhaseTasks())
  if (selectedSheet === 'list') body.innerHTML = renderTaskTable(filteredPhaseTasks())
  if (selectedSheet === 'phase') body.innerHTML = renderPhaseCards()
  if (selectedSheet === 'content') body.innerHTML = renderContentCards(filteredPhaseTasks().filter(isContentTask))

  body.querySelectorAll('[data-row-status]').forEach(select => {
    select.addEventListener('change', () => setStatus(Number(select.dataset.rowStatus), select.value))
  })
}

function renderGantt(items) {
  if (!items.length) return '<p class="empty">表示するタスクがありません。</p>'
  const min = -90
  const max = 30
  return `<div class="gantt-list">${items.map(item => {
    const left = ((item.startDay - min) / (max - min)) * 100
    const width = Math.max(((item.endDay - item.startDay) / (max - min)) * 100, 2)
    const status = getStatus(item)
    return `
      <div class="gantt-row">
        <strong title="${item.name}">${item.name}</strong>
        <div class="bar-track"><div class="bar ${status}" style="left:${left}%;width:${width}%"></div></div>
        <span>${statusLabel(status)}</span>
      </div>
    `
  }).join('')}</div>`
}

function renderTaskTable(items) {
  return `
    <div class="task-table">
      <div class="task-row"><span>状態</span><span>タスク</span><span>期限</span><span>種別</span><span>変更</span></div>
      ${items.map(item => `
        <div class="task-row">
          <span>${statusLabel(getStatus(item))}</span>
          <strong title="${item.name}">${item.name}</strong>
          <span>${formatDate(item.endDate)}</span>
          <span>${categoryLabel(item.category)}</span>
          <select data-row-status="${item.id}">
            ${['todo', 'doing', 'waiting', 'done'].map(statusId => `<option value="${statusId}" ${statusId === getStatus(item) ? 'selected' : ''}>${statusLabel(statusId)}</option>`).join('')}
          </select>
        </div>
      `).join('')}
    </div>
  `
}

function renderPhaseCards() {
  return `<div class="phase-grid">${phases.map(phase => {
    const items = tasks.filter(item => item.phase === phase.id)
    const done = items.filter(item => getStatus(item) === 'done').length
    return `
      <div class="phase-card">
        <strong>${phase.code} ${phase.label} / ${done} of ${items.length}</strong>
        <span>${phase.purpose}</span>
      </div>
    `
  }).join('')}</div>`
}

function renderContentCards(items) {
  if (!items.length) return '<p class="empty">文章制作に該当するタスクはありません。</p>'
  return `<div class="content-table">${items.map(item => `
    <div class="content-card">
      <strong>${item.name}</strong>
      <span>${categoryLabel(item.category)} / ${formatDate(item.endDate)} / ${statusLabel(getStatus(item))}</span>
    </div>
  `).join('')}</div>`
}

function renderStudio() {
  const tools = document.querySelector('#contentTypeButtons')
  tools.innerHTML = contentTypes.map(item => `
    <button class="tool-button ${item.id === selectedContentType ? 'active' : ''}" data-content-type="${item.id}" type="button">
      <strong>${item.label}</strong>
      <span>${item.help}</span>
    </button>
  `).join('')
  tools.querySelectorAll('[data-content-type]').forEach(button => {
    button.addEventListener('click', () => {
      selectedContentType = button.dataset.contentType
      renderStudio()
      saveState()
    })
  })

  document.querySelector('#generateDraft').onclick = () => {
    document.querySelector('#draftPreview').value = buildDraft(selectedContentType, modeTasks('content')[0] || modeTasks('today')[0])
  }
  document.querySelector('#saveDraft').onclick = () => {
    const text = document.querySelector('#draftPreview').value.trim()
    if (!text) return
    state.drafts.unshift({
      id: Date.now(),
      type: selectedContentType,
      title: contentTypes.find(item => item.id === selectedContentType).label,
      text,
      createdAt: new Date().toLocaleString('ja-JP'),
    })
    state.drafts = state.drafts.slice(0, 12)
    saveState()
    renderSavedDrafts()
  }
  document.querySelector('#clearDrafts').onclick = () => {
    state.drafts = []
    saveState()
    renderSavedDrafts()
  }
  renderSavedDrafts()
}

function renderSavedDrafts() {
  const container = document.querySelector('#savedDrafts')
  if (!state.drafts.length) {
    container.innerHTML = '<div class="saved-item"><span>保存された下書きはまだありません</span></div>'
    return
  }
  container.innerHTML = state.drafts.map(draft => `
    <button class="saved-item" data-draft="${draft.id}" type="button">
      <strong>${draft.title}</strong>
      <span>${draft.createdAt}</span>
    </button>
  `).join('')
  container.querySelectorAll('[data-draft]').forEach(button => {
    button.addEventListener('click', () => {
      const draft = state.drafts.find(item => item.id === Number(button.dataset.draft))
      if (draft) document.querySelector('#draftPreview').value = draft.text
    })
  })
}

function inferContentType(item) {
  if (!item) return selectedContentType
  if (item.category === 'CloudFunding') return 'crowdfunding'
  if (item.category === 'Instagram') return 'instagram'
  if (/プレスリリース|note|ストーリー|背景/.test(item.name)) return 'note'
  return 'dm'
}

function buildDraft(type, item) {
  const taskName = item?.name || phases.find(phase => phase.id === selectedPhase).title
  const intro = '福島県本宮市、本宮駅から徒歩1分。LANDSCAPE COFFEE 07は、ただコーヒーを飲む場所ではなく、帰ってこられる思い出の交差点を目指しています。'
  const tone = '思い出は複利になる、ただいまと言える場所、頼り頼られる幸せ。'
  if (type === 'crowdfunding') {
    return `${intro}\n\nこのクラファンで届けたいのは、店をつくるための資金だけではありません。本宮で過ごす時間が、誰かの記憶に残り、また帰ってきたいと思える場所になることです。\n\n今回の準備テーマ: ${taskName}\n\n${tone}\nこの言葉を大切にしながら、開業までの道のりを一緒につくっていけたら嬉しいです。`
  }
  if (type === 'note') {
    return `${intro}\n\n店を立ち上げる中で何度も考えているのは、場所は記憶を預かる器でもある、ということです。\n\n${tone}\n\n${taskName}について、いま考えていることを少しずつ書き残していきます。`
  }
  if (type === 'dm') {
    return `突然のご連絡失礼します。LANDSCAPE COFFEE 07の立ち上げにあたり、${taskName}についてご相談したくご連絡しました。\n\n本宮駅前に、地域の人や訪れる人が「ただいま」と言えるようなカフェ&バルを準備しています。\n\nもしご一緒できそうな余地があれば、一度短くお話しできたら嬉しいです。`
  }
  return `${intro}\n\n開業までの準備や、店に込めた考えを少しずつ記録していきます。\n\n今日の準備: ${taskName}\n\n${tone}`
}

function setupPassword() {
  const passwordScreen = document.querySelector('#passwordScreen')
  const appShell = document.querySelector('#appShell')
  const isAuthed = localStorage.getItem(AUTH_KEY) === 'true'
  if (isAuthed) {
    passwordScreen.hidden = true
    appShell.hidden = false
  }
  document.querySelector('#passwordForm').addEventListener('submit', event => {
    event.preventDefault()
    const value = document.querySelector('#passwordInput').value
    if (value === APP_PASSWORD) {
      localStorage.setItem(AUTH_KEY, 'true')
      passwordScreen.hidden = true
      appShell.hidden = false
      render()
    } else {
      document.querySelector('#passwordError').textContent = 'パスワードが違います。'
    }
  })
}

function setupManual() {
  const dialog = document.querySelector('#manualDialog')
  document.querySelector('#openManual').addEventListener('click', () => dialog.showModal())
  document.querySelector('#closeManual').addEventListener('click', () => dialog.close())
}

setupPassword()
setupManual()
if (localStorage.getItem(AUTH_KEY) === 'true') render()
