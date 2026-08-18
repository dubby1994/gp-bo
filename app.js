
/* =========================================================================
 *  国际化 i18n
 * ========================================================================= */
const I18N = {
  zh: {
    title: "GP-BO · 高斯过程贝叶斯优化",
    subtitle: "Gaussian Process + Bayesian Optimization · 多参数寻优",
    exportJson: "导出 JSON",
    exportCsv: "导出 CSV",
    downloadTemplate: "下载模板",
    importData: "导入数据",
    demoData: "示例数据",
    themeToggle: "切换主题",
    paramDef: "参数定义",
    paramCount: n => `${n} 个参数`,
    addParam: "+ 添加参数",
    clear: "清空",
    optSettings: "优化设置",
    optGoal: "优化目标",
    maximize: "最大化 (max)",
    minimize: "最小化 (min)",
    acqFuncLabel: "采集函数",
    acqEi: "EI · 期望改进",
    acqUcb: "UCB · 置信上界",
    acqPi: "PI · 改进概率",
    acqKappa: "采集函数参数",
    kernelLabel: "核函数",
    kernelRbf: "RBF · 平方指数",
    nRestarts: "超参数优化重启次数",
    nCandidates: "采集函数采样数",
    acqHelp: `<b>EI ξ</b> / <b>UCB κ</b> 较大→更探索，较小→更利用。<br>推荐: EI ξ=0.01, UCB κ=2~5, PI ξ=0.1。`,
    expData: "试验数据",
    dataCount: n => `${n} 条记录`,
    addRow: "+ 添加记录",
    runOpt: "▶ 运行优化 · 推荐下一个试验点",
    verifyOpt: "验证当前最优",
    acceptSugg: "采纳建议点(空 y)",
    optResults: "优化结果",
    modelInfo: "模型信息",
    visualization: "可视化",
    runToSee: "运行优化后显示结果",
    notFitted: "未拟合",
    needData2: "需要至少 2 条数据才能可视化",
    paramNamePh: "参数名",
    min: "最小",
    max: "最大",
    yOutput: "y (输出)",
    noData: '暂无数据 · 点击 "+ 添加记录" 或导入',
    pending: "待测",
    fitting: "拟合 GP 模型...",
    optDone: "优化完成",
    verifyDone: "验证完成",
    needParams: "请先定义参数",
    need2: "至少需要 2 条含 y 值的数据",
    optFail: "优化失败: ",
    noParamsExport: "无参数定义",
    exportedJson: "已导出 JSON",
    exportedCsv: "已导出 CSV",
    imported: n => `导入成功: ${n} 条记录`,
    importFail: "导入失败: ",
    templateDownloaded: "已下载模板 Excel",
    needRunOpt: "请先运行优化",
    needSuggestion: "请先运行优化得到建议点",
    accepted: "已添加建议点到数据表 (y 待测)",
    bestY: isMax => `当前最优 y (${isMax ? 'max' : 'min'})`,
    record: i => `第 ${i} 条记录`,
    suggestNext: "建议下一个试验点",
    acqLabel: (fn, val, k) => `采集函数 ${fn.toUpperCase()} = ${val.toFixed(4)} (κ=${k})`,
    optParams: "最优解参数",
    suggestPred: "建议点预测",
    ci: ci => `95% 置信区间: ${ci}`,
    tip: `<b>提示</b>: 在该建议点进行试验, 把结果填入新行, 然后再次运行优化。`,
    trainData: "训练数据",
    nRecords: n => `${n} 条`,
    kernelFn: "核函数",
    lengthScale: "长度尺度 l",
    normSpace: "(归一化空间)",
    stdSpace: "(标准化空间)",
    signalStd: "信号标准差 σf",
    noiseStd: "噪声标准差 σn",
    snr: "信噪比 σf/σn",
    lml: "对数边际似然",
    yMeanStd: "y 均值/标准差",
    verifyTitle: "验证: 当前最优解",
    obsY: "观测值 y",
    predAtBest: "模型在最优点的预测",
    confidence: "置信度评估",
    high: "高", mid: "中", low: "低",
    modelGrasp: "模型对该点的把握",
    residInCI: w => `预测残差是否在 95% CI 内: ${w ? '是 ✓' : '否 ✗'}`,
    localMaxStd: s => `邻域最大 σ: ${s.toFixed(4)}`,
    acqAtBest: "最优点采集函数值",
    acqNearZero: "采集函数接近 0, 说明该区域已被充分探索, 当前最优较可靠",
    acqHasValue: "采集函数仍有值, 说明该区域还有改进空间, 建议继续试验",
    conclusion: "结论",
    reliable: "最优解可信度较高, 可考虑收敛",
    continueTest: "建议继续按推荐点试验, 进一步验证",
    predErr: e => `预测误差: ${e.toFixed(4)}`,
    convTitle: "累计最优 y 随试验次数变化",
    currentBest: v => `当前最优: ${v.toFixed(4)}`,
    gp1dTitle: (n, p) => `1D GP 拟合: ${n} → y`,
    gp1dLegend: p => `绿=均值, 阴影=95%CI, 红点=观测, 蓝点=建议`,
    heatTitle: (a, b) => `2D GP 均值热力图: ${a} × ${b} → y`,
    heatLegend: "红点=观测, 蓝点=建议",
    surf3dTitle: (a, b) => `3D GP 曲面: ${a} × ${b} → y`,
    surf3dLegend: "颜色=高度 · 红点=观测 · 蓝点=建议",
    surf3dRotate: "旋转视角",
    sliceTitle: "维度切片 (其它维度固定在当前最优点)",
    sliceLegend: "绿=μ, 阴影=±σ, 蓝=建议",
    convX: "试验次数",
    convY: "最优 y",
    vizTabConv: "收敛曲线",
    vizTab1d: "1D GP 拟合",
    vizTab2d: "2D 热力图",
    vizTab3d: "3D 曲面",
    vizTabSlice: "维度切片",
    demoLoaded: "已加载示例数据 (3 参数函数, 寻找最大值)",
    templateHeader: "参数定义见上, 模板列对应参数名, 最后一列为 y",
    templateNote: "模板生成基于当前参数定义。如未定义参数, 使用默认 x1,x2。"
  },
  en: {
    title: "GP-BO · Gaussian Process Bayesian Optimization",
    subtitle: "Gaussian Process + Bayesian Optimization · Multi-parameter Optimization",
    exportJson: "Export JSON",
    exportCsv: "Export CSV",
    downloadTemplate: "Template",
    importData: "Import",
    demoData: "Demo",
    themeToggle: "Toggle theme",
    paramDef: "Parameter Definition",
    paramCount: n => `${n} parameter${n===1?'':'s'}`,
    addParam: "+ Add Param",
    clear: "Clear",
    optSettings: "Optimization Settings",
    optGoal: "Objective",
    maximize: "Maximize",
    minimize: "Minimize",
    acqFuncLabel: "Acquisition",
    acqEi: "EI · Expected Improvement",
    acqUcb: "UCB · Upper Confidence Bound",
    acqPi: "PI · Probability of Improvement",
    acqKappa: "Acquisition Param (ξ/κ)",
    kernelLabel: "Kernel",
    kernelRbf: "RBF · Squared Exponential",
    nRestarts: "Hyperparam Restart Count",
    nCandidates: "Acquisition Sample Count",
    acqHelp: `<b>EI ξ</b> / <b>UCB κ</b> larger→more exploration, smaller→more exploitation.<br>Recommended: EI ξ=0.01, UCB κ=2~5, PI ξ=0.1.`,
    expData: "Experiment Data",
    dataCount: n => `${n} record${n===1?'':'s'}`,
    addRow: "+ Add Row",
    runOpt: "▶ Run Optimization · Suggest Next Point",
    verifyOpt: "Verify Current Best",
    acceptSugg: "Accept Suggestion (empty y)",
    optResults: "Optimization Results",
    modelInfo: "Model Info",
    visualization: "Visualization",
    runToSee: "Run optimization to see results",
    notFitted: "Not fitted",
    needData2: "Need at least 2 data points to visualize",
    paramNamePh: "name",
    min: "min",
    max: "max",
    yOutput: "y (output)",
    noData: 'No data · click "+ Add Row" or import',
    pending: "pending",
    fitting: "Fitting GP model...",
    optDone: "Optimization done",
    verifyDone: "Verification done",
    needParams: "Please define parameters first",
    need2: "Need at least 2 records with y value",
    optFail: "Optimization failed: ",
    noParamsExport: "No parameters defined",
    exportedJson: "JSON exported",
    exportedCsv: "CSV exported",
    imported: n => `Imported: ${n} record${n===1?'':'s'}`,
    importFail: "Import failed: ",
    templateDownloaded: "Template Excel downloaded",
    needRunOpt: "Please run optimization first",
    needSuggestion: "Please run optimization to get a suggestion",
    accepted: "Suggestion added to table (y pending)",
    bestY: isMax => `Current best y (${isMax ? 'max' : 'min'})`,
    record: i => `Record #${i}`,
    suggestNext: "Suggested next point",
    acqLabel: (fn, val, k) => `Acquisition ${fn.toUpperCase()} = ${val.toFixed(4)} (κ=${k})`,
    optParams: "Best parameters",
    suggestPred: "Suggestion prediction",
    ci: ci => `95% confidence interval: ${ci}`,
    tip: `<b>Tip</b>: Run an experiment at the suggested point, fill the result into a new row, then re-run optimization.`,
    trainData: "Training data",
    nRecords: n => `${n} record${n===1?'':'s'}`,
    kernelFn: "Kernel",
    lengthScale: "Length scale l",
    normSpace: "(normalized space)",
    stdSpace: "(standardized space)",
    signalStd: "Signal std σf",
    noiseStd: "Noise std σn",
    snr: "Signal/noise σf/σn",
    lml: "Log marginal likelihood",
    yMeanStd: "y mean / std",
    verifyTitle: "Verify: current best",
    obsY: "Observed y",
    predAtBest: "Model prediction at best point",
    confidence: "Confidence assessment",
    high: "High", mid: "Medium", low: "Low",
    modelGrasp: "model's confidence at this point",
    residInCI: w => `Residual within 95% CI: ${w ? 'Yes ✓' : 'No ✗'}`,
    localMaxStd: s => `Local max σ: ${s.toFixed(4)}`,
    acqAtBest: "Acquisition at best point",
    acqNearZero: "Acquisition ≈ 0, this region is well-explored, current best is reliable",
    acqHasValue: "Acquisition still has value, this region can be improved, keep testing",
    conclusion: "Conclusion",
    reliable: "Best is reliable, may consider converged",
    continueTest: "Keep testing suggested points to further verify",
    predErr: e => `Prediction error: ${e.toFixed(4)}`,
    convTitle: "Cumulative best y vs trial count",
    currentBest: v => `Current best: ${v.toFixed(4)}`,
    gp1dTitle: (n, p) => `1D GP fit: ${n} → y`,
    gp1dLegend: p => `green=mean, shade=95%CI, red=obs, blue=suggestion`,
    heatTitle: (a, b) => `2D GP mean heatmap: ${a} × ${b} → y`,
    heatLegend: "red=obs, blue=suggestion",
    surf3dTitle: (a, b) => `3D GP surface: ${a} × ${b} → y`,
    surf3dLegend: "color=height · red=obs · blue=suggestion",
    surf3dRotate: "Rotate view",
    sliceTitle: "Dimension slices (other dims fixed at current best)",
    sliceLegend: "green=μ, shade=±σ, blue=suggestion",
    convX: "Trial count",
    convY: "Best y",
    vizTabConv: "Convergence",
    vizTab1d: "1D GP Fit",
    vizTab2d: "2D Heatmap",
    vizTab3d: "3D Surface",
    vizTabSlice: "Slices",
    demoLoaded: "Demo loaded (3-parameter function, maximize)",
    templateHeader: "Param columns match definitions above; last column is y",
    templateNote: "Template based on current parameter definitions. If none defined, uses default x1, x2."
  }
};
let LANG = localStorage.getItem('gpbo-lang') || 'zh';
function t(key, ...args) {
  const v = I18N[LANG][key];
  if (v === undefined) return key;
  return typeof v === 'function' ? v(...args) : v;
}
function toggleLang() {
  LANG = LANG === 'zh' ? 'en' : 'zh';
  localStorage.setItem('gpbo-lang', LANG);
  applyI18n();
}
function applyI18n() {
  document.documentElement.lang = LANG === 'zh' ? 'zh-CN' : 'en';
  document.getElementById('langBtn').textContent = LANG === 'zh' ? '中文' : 'EN';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const v = I18N[LANG][key];
    // 仅更新字符串值; 函数值由各 render* 函数带参调用 t() 更新
    if (typeof v === 'string') el.innerHTML = v;
  });
  // 动态更新的元素
  renderParams();
  renderTable();
  if (state.gp) {
    renderModelInfo(state.gp.model, state.gp.yMean, state.gp.yStd, state.gp.valid.length);
    // 重渲染当前结果视图 (results 或 verify)
    if (state.lastView === 'results' && state.lastResults) {
      renderResults(state.lastResults);
    } else if (state.lastView === 'verify') {
      // 重新执行验证渲染 (无副作用, 只重画)
      _renderVerify();
    }
    renderViz();
  } else {
    clearResults();
  }
}

/* =========================================================================
 *  主题 (dark / light)
 * ========================================================================= */
const THEMES = {
  dark: {
    canvasBg:     '#131820',
    grid:         '#2d3744',
    gridFaint:    'rgba(148,163,184,0.12)',
    axis:         '#94a3b8',
    label:        '#e2e8f0',
    polyStroke:   '#0f1419',
    ptOutline:    '#0f1419',
    ptHalo:       '#ffffff',
    accent:       '#3dd68c',
    accentShadow: 'rgba(61,214,140,0.15)',
    accentDash:   'rgba(61,214,140,0.4)',
    obs:          '#fc8181',
    sugg:         '#4a9eff',
    warn:         '#f6ad55'
  },
  light: {
    canvasBg:     '#ffffff',
    grid:         '#e2e8f0',
    gridFaint:    'rgba(100,116,139,0.15)',
    axis:         '#64748b',
    label:        '#1e293b',
    polyStroke:   '#ffffff',
    ptOutline:    '#1e293b',
    ptHalo:       '#1e293b',
    accent:       '#1ea86a',
    accentShadow: 'rgba(30,168,106,0.18)',
    accentDash:   'rgba(30,168,106,0.45)',
    obs:          '#e23b3b',
    sugg:         '#2b7de9',
    warn:         '#d97706'
  }
};
let THEME = localStorage.getItem('gpbo-theme') || 'dark';
function TC() { return THEMES[THEME]; }
function toggleTheme() {
  THEME = THEME === 'dark' ? 'light' : 'dark';
  localStorage.setItem('gpbo-theme', THEME);
  applyTheme();
}
function applyTheme() {
  document.documentElement.dataset.theme = THEME;
  const btn = document.getElementById('themeBtn');
  if (btn) {
    btn.textContent = THEME === 'dark' ? '🌙' : '☀️';
    btn.title = t('themeToggle');
  }
  generateFavicon();
  if (state.gp) renderViz();
}

/* =========================================================================
 *  线性代数工具 (小型矩阵运算)
 * ========================================================================= */
const LA = {
  // Cholesky 分解: A = L * L^T  (A 必须对称正定)
  cholesky(A) {
    const n = A.length;
    const L = Array.from({length: n}, () => new Array(n).fill(0));
    for (let i = 0; i < n; i++) {
      for (let j = 0; j <= i; j++) {
        let s = A[i][j];
        for (let k = 0; k < j; k++) s -= L[i][k] * L[j][k];
        if (i === j) {
          if (s <= 1e-12) s = 1e-12; // 数值稳定
          L[i][j] = Math.sqrt(s);
        } else {
          L[i][j] = s / L[j][j];
        }
      }
    }
    return L;
  },
  // 解 L * x = b (前代)
  forwardSub(L, b) {
    const n = L.length;
    const x = new Array(n);
    for (let i = 0; i < n; i++) {
      let s = b[i];
      for (let j = 0; j < i; j++) s -= L[i][j] * x[j];
      x[i] = s / L[i][i];
    }
    return x;
  },
  // 解 L^T * x = b (回代)
  backSub(L, b) {
    const n = L.length;
    const x = new Array(n);
    for (let i = n - 1; i >= 0; i--) {
      let s = b[i];
      for (let j = i + 1; j < n; j++) s -= L[j][i] * x[j];
      x[i] = s / L[i][i];
    }
    return x;
  },
  // 使用 Cholesky 解 A * x = b
  solveChol(A, b) {
    const L = this.cholesky(A);
    const y = this.forwardSub(L, b);
    return this.backSub(L, y);
  },
  // 矩阵向量乘
  matVec(A, v) {
    return A.map(row => row.reduce((s, a, i) => s + a * v[i], 0));
  },
  dot(a, b) { return a.reduce((s, x, i) => s + x * b[i], 0); },
  // 加单位矩阵倍数
  addI(A, c) {
    const n = A.length;
    const B = A.map(r => r.slice());
    for (let i = 0; i < n; i++) B[i][i] += c;
    return B;
  }
};

/* =========================================================================
 *  核函数
 * ========================================================================= */
function dist2(a, b) {
  let s = 0;
  for (let i = 0; i < a.length; i++) { const d = a[i] - b[i]; s += d * d; }
  return s;
}
function dist(a, b) { return Math.sqrt(dist2(a, b)); }

const Kernels = {
  rbf(l2, sf2) {
    return (a, b) => sf2 * Math.exp(-dist2(a, b) / (2 * l2));
  },
  matern32(l2, sf2) {
    const l = Math.sqrt(l2);
    return (a, b) => {
      const d = dist(a, b);
      return sf2 * (1 + Math.sqrt(3) * d / l) * Math.exp(-Math.sqrt(3) * d / l);
    };
  }
};

/* =========================================================================
 *  高斯过程回归
 *  超参数: lengthScale (l), signalStd (sf), noiseStd (sn)
 *  在 log 空间优化以保持正值
 * ========================================================================= */
class GP {
  constructor(kernelType = 'rbf') {
    this.kernelType = kernelType;
    this.X = null;
    this.y = null;
    this.L = null;
    this.alpha = null;
    this.params = null; // {logL, logSf, logSn}
    this.lml = null;
  }
  kernelFn(logL, logSf) {
    const l2 = Math.exp(2 * logL);
    const sf2 = Math.exp(2 * logSf);
    return Kernels[this.kernelType](l2, sf2);
  }
  // 计算核矩阵 K(X,X) + sn^2 * I
  computeK(X, logL, logSf, logSn) {
    const n = X.length;
    const k = this.kernelFn(logL, logSf);
    const K = Array.from({length: n}, () => new Array(n));
    const sn2 = Math.exp(2 * logSn);
    for (let i = 0; i < n; i++) {
      K[i][i] = k(X[i], X[i]) + sn2 + 1e-8;
      for (let j = 0; j < i; j++) {
        const v = k(X[i], X[j]);
        K[i][j] = v; K[j][i] = v;
      }
    }
    return K;
  }
  // 对数边际似然
  logMarginalLikelihood(X, y, logL, logSf, logSn) {
    const n = X.length;
    const K = this.computeK(X, logL, logSf, logSn);
    let L;
    try { L = LA.cholesky(K); }
    catch (e) { return -1e10; }
    const Ly = LA.forwardSub(L, y);
    const alpha = LA.backSub(L, Ly);
    let logDet = 0;
    for (let i = 0; i < n; i++) logDet += Math.log(L[i][i]);
    const quad = LA.dot(y, alpha);
    return -0.5 * quad - logDet - 0.5 * n * Math.log(2 * Math.PI);
  }
  // 拟合: 优化超参数
  fit(X, y, nRestarts = 10) {
    if (X.length < 2) throw new Error('至少需要 2 条数据');
    this.X = X.map(r => r.slice());
    this.y = y.slice();
    const n = X.length;
    const dim = X[0].length;

    // 数据范围用于初始化
    const ranges = [];
    for (let d = 0; d < dim; d++) {
      let mn = Infinity, mx = -Infinity;
      for (let i = 0; i < n; i++) {
        mn = Math.min(mn, X[i][d]);
        mx = Math.max(mx, X[i][d]);
      }
      ranges.push(Math.max(mx - mn, 1e-6));
    }
    const avgRange = ranges.reduce((s, r) => s + r, 0) / dim;

    let bestLML = -Infinity, bestParams = null;
    const yVar = Math.max(variance(y), 1e-8);

    // 多次随机重启 + 局部爬山
    const starts = [];
    // 第一个起点用合理初值
    starts.push({ logL: Math.log(avgRange), logSf: 0.5 * Math.log(yVar), logSn: 0.5 * Math.log(yVar * 0.01) });
    for (let r = 0; r < nRestarts; r++) {
      starts.push({
        logL: Math.log(avgRange) + (Math.random() - 0.5) * 4,
        logSf: 0.5 * Math.log(yVar) + (Math.random() - 0.5) * 4,
        logSn: 0.5 * Math.log(yVar * 0.01) + (Math.random() - 0.5) * 4
      });
    }
    for (const start of starts) {
      const result = this.localRefine(start);
      if (result.lml > bestLML) {
        bestLML = result.lml;
        bestParams = result.params;
      }
    }
    this.params = bestParams;
    this.lml = bestLML;
    this._computeAlpha();
    return this;
  }
  _computeAlpha() {
    const { logL, logSf, logSn } = this.params;
    const K = this.computeK(this.X, logL, logSf, logSn);
    this.L = LA.cholesky(K);
    const Ly = LA.forwardSub(this.L, this.y);
    this.alpha = LA.backSub(this.L, Ly);
  }
  // 局部爬山 (基于有限差分梯度)
  localRefine(params) {
    let p = { ...params };
    let curLML = this.logMarginalLikelihood(this.X, this.y, p.logL, p.logSf, p.logSn);
    const lr = 0.1;
    const stepBase = 0.05;
    for (let iter = 0; iter < 100; iter++) {
      const grads = {};
      let improved = false;
      for (const key of ['logL', 'logSf', 'logSn']) {
        const h = stepBase;
        const pPlus = { ...p, [key]: p[key] + h };
        const pMinus = { ...p, [key]: p[key] - h };
        const lmlPlus = this.logMarginalLikelihood(this.X, this.y, pPlus.logL, pPlus.logSf, pPlus.logSn);
        const lmlMinus = this.logMarginalLikelihood(this.X, this.y, pMinus.logL, pMinus.logSf, pMinus.logSn);
        grads[key] = (lmlPlus - lmlMinus) / (2 * h);
      }
      // 自适应学习率
      const norm = Math.sqrt(grads.logL ** 2 + grads.logSf ** 2 + grads.logSn ** 2);
      if (norm < 1e-5) break;
      const newP = {
        logL: p.logL + lr * grads.logL,
        logSf: p.logSf + lr * grads.logSf,
        logSn: p.logSn + lr * grads.logSn
      };
      // 限制 noise 不能太大
      newP.logSn = Math.min(newP.logSn, Math.log(Math.sqrt(variance(this.y))));
      const newLML = this.logMarginalLikelihood(this.X, this.y, newP.logL, newP.logSf, newP.logSn);
      if (newLML > curLML) {
        p = newP; curLML = newLML; improved = true;
      } else {
        // 缩小学习率
        break;
      }
    }
    return { params: p, lml: curLML };
  }
  // 预测
  predict(x) {
    if (!this.params) return { mean: 0, std: 0 };
    const k = this.kernelFn(this.params.logL, this.params.logSf);
    const kstar = this.X.map(xi => k(x, xi));
    const mean = LA.dot(kstar, this.alpha);
    // v = L^-1 kstar
    const v = LA.forwardSub(this.L, kstar);
    let varX = k(x, x) - LA.dot(v, v);
    varX = Math.max(varX, 0);
    return { mean, std: Math.sqrt(varX) };
  }
  // 批量预测
  predictBatch(Xs) {
    return Xs.map(x => this.predict(x));
  }
}

function variance(arr) {
  const m = arr.reduce((s, x) => s + x, 0) / arr.length;
  return arr.reduce((s, x) => s + (x - m) ** 2, 0) / arr.length;
}

/* =========================================================================
 *  采集函数
 * ========================================================================= */
const Acquisitions = {
  // 期望改进 (max)
  ei(gp, x, yBest, xi = 0.01) {
    const { mean, std } = gp.predict(x);
    if (std < 1e-10) return 0;
    const z = (mean - yBest - xi) / std;
    return (mean - yBest - xi) * normCDF(z) + std * normPDF(z);
  },
  // 置信上界 (max)
  ucb(gp, x, yBest, kappa = 1.96) {
    const { mean, std } = gp.predict(x);
    return mean + kappa * std;
  },
  // 改进概率 (max)
  pi(gp, x, yBest, xi = 0.1) {
    const { mean, std } = gp.predict(x);
    if (std < 1e-10) return 0;
    return normCDF((mean - yBest - xi) / std);
  }
};
function normPDF(x) { return Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI); }
function normCDF(x) {
  // Abramowitz & Stegun 近似
  const t = 1 / (1 + 0.2316419 * Math.abs(x));
  const d = 0.3989423 * Math.exp(-0.5 * x * x);
  let p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  return x > 0 ? 1 - p : p;
}

/* =========================================================================
 *  全局状态
 * ========================================================================= */
const state = {
  params: [],     // [{name, min, max, type:'continuous'}]
  data: [],       // [{x: [...], y: number}]
  gp: null,
  lastSuggestion: null,
  lastResults: null,   // 缓存最近一次 renderResults 的参数, 用于语言切换时重渲染
  lastVerify: null,    // 缓存最近一次 verifyOptimum 的计算结果
  lastView: null,      // 'results' | 'verify' | null
  vizMode: 'convergence',
  surf3dAzimuth: -35   // 3D 曲面方位角 (度)
};

/* =========================================================================
 *  参数管理
 * ========================================================================= */
function addParam(name = '', min = 0, max = 1) {
  if (!name) name = 'x' + (state.params.length + 1);
  state.params.push({ name, min: +min, max: +max, type: 'continuous' });
  renderParams(); renderTable();
}
function clearParams() {
  state.params = []; state.data = [];
  renderParams(); renderTable();
  clearResults();
}
function removeParam(i) {
  state.params.splice(i, 1);
  // 同步移除数据中对应维度
  state.data = state.data.map(d => ({ x: d.x.filter((_, j) => j !== i), y: d.y }));
  renderParams(); renderTable();
  clearResults();
}
function renderParams() {
  const el = document.getElementById('paramsList');
  el.innerHTML = state.params.map((p, i) => `
    <div class="param-row">
      <input value="${p.name}" onchange="updateParam(${i}, 'name', this.value)" placeholder="${t('paramNamePh')}">
      <input type="number" value="${p.min}" onchange="updateParam(${i}, 'min', +this.value)" placeholder="${t('min')}">
      <input type="number" value="${p.max}" onchange="updateParam(${i}, 'max', +this.value)" placeholder="${t('max')}">
      <button class="del-btn" onclick="removeParam(${i})" title="×">×</button>
    </div>
  `).join('');
  document.getElementById('paramCount').textContent = t('paramCount', state.params.length);
}
function updateParam(i, key, val) {
  state.params[i][key] = val;
  renderTable();
}

/* =========================================================================
 *  数据管理
 * ========================================================================= */
function addRow(xArr = null, y = '') {
  if (state.params.length === 0) { toast('请先添加参数', 'error'); return; }
  const x = xArr || state.params.map(p => +(p.min + (p.max - p.min) / 2).toFixed(4));
  state.data.push({ x, y: y === '' ? '' : +y });
  renderTable();
}
function clearData() {
  state.data = []; renderTable(); clearResults();
}
function removeRow(i) {
  state.data.splice(i, 1); renderTable(); clearResults();
}
function updateCell(i, j, val) {
  if (j === 'y') state.data[i].y = val === '' ? '' : +val;
  else state.data[i].x[+j] = +val;
  clearResults();
}
function renderTable() {
  const head = document.getElementById('dataHeader');
  const body = document.getElementById('dataBody');
  head.innerHTML = '<th>#</th>' +
    state.params.map(p => `<th>${escapeHtml(p.name)}</th>`).join('') +
    `<th>${t('yOutput')}</th><th></th>`;
  if (state.data.length === 0) {
    body.innerHTML = `<tr><td colspan="${state.params.length + 3}" class="empty">${t('noData')}</td></tr>`;
  } else {
    body.innerHTML = state.data.map((d, i) => `
      <tr>
        <td class="num">${i + 1}</td>
        ${d.x.map((v, j) => `<td><input type="number" value="${v}" step="any" onchange="updateCell(${i}, ${j}, this.value)"></td>`).join('')}
        <td><input type="number" value="${d.y}" step="any" placeholder="${t('pending')}" onchange="updateCell(${i}, 'y', this.value)"></td>
        <td><button class="del-btn" onclick="removeRow(${i})">×</button></td>
      </tr>
    `).join('');
  }
  document.getElementById('dataCount').textContent = t('dataCount', state.data.length);
}

/* =========================================================================
 *  归一化 (按参数范围归一到 [0,1])
 * ========================================================================= */
function normalizeX(xRaw) {
  return xRaw.map((v, i) => {
    const p = state.params[i];
    const range = p.max - p.min;
    return range === 0 ? 0.5 : (v - p.min) / range;
  });
}
function denormalizeX(xNorm) {
  return xNorm.map((v, i) => {
    const p = state.params[i];
    return p.min + v * (p.max - p.min);
  });
}

/* =========================================================================
 *  运行优化
 * ========================================================================= */
function runOptimization() {
  if (state.params.length === 0) { toast(t('needParams'), 'error'); return; }
  const valid = state.data.filter(d => d.y !== '' && !isNaN(d.y));
  if (valid.length < 2) { toast(t('need2'), 'error'); return; }

  try {
    showToast(t('fitting'), 'info');
    setTimeout(() => {
      _doOptimize(valid);
    }, 30);
  } catch (e) {
    toast(t('optFail') + e.message, 'error');
  }
}
function _doOptimize(valid) {
  // 准备数据 (归一化 X, 中心化 y)
  const Xraw = valid.map(d => d.x);
  const Xnorm = Xraw.map(normalizeX);
  const yRaw = valid.map(d => +d.y);
  const yMean = yRaw.reduce((s, x) => s + x, 0) / yRaw.length;
  const yStd = Math.max(Math.sqrt(variance(yRaw)), 1e-8);
  const y = yRaw.map(v => (v - yMean) / yStd);  // 标准化便于优化

  // 拟合 GP
  const kernelType = document.getElementById('kernelType').value;
  const nRestarts = +document.getElementById('nRestarts').value;
  const gp = new GP(kernelType);
  gp.fit(Xnorm, y, nRestarts);

  // 当前最优 (在原始 y 空间)
  const goal = document.getElementById('optGoal').value;
  const isMax = goal === 'max';
  let bestIdx = 0, bestY = valid[0].y;
  for (let i = 1; i < valid.length; i++) {
    if ((isMax && valid[i].y > bestY) || (!isMax && valid[i].y < bestY)) {
      bestY = valid[i].y; bestIdx = i;
    }
  }
  const yBestNorm = (bestY - yMean) / yStd;

  // 优化采集函数 (在归一化空间)
  const acqFunc = document.getElementById('acqFunc').value;
  const kappa = +document.getElementById('acqKappa').value;
  const nCandidates = +document.getElementById('nCandidates').value;

  const acqFn = (xNorm) => {
    const pred = gp.predict(xNorm);
    let val;
    if (acqFunc === 'ei') val = Acquisitions.ei(gp, xNorm, yBestNorm, kappa);
    else if (acqFunc === 'ucb') val = Acquisitions.ucb(gp, xNorm, yBestNorm, kappa);
    else val = Acquisitions.pi(gp, xNorm, yBestNorm, kappa);
    // 最小化目标时取反
    return isMax ? val : -val;
  };

  // 随机采样 + 局部细化
  let candidates = [];
  for (let i = 0; i < nCandidates; i++) {
    candidates.push(state.params.map(() => Math.random()));
  }
  // 加入已知点附近
  for (const xn of Xnorm) {
    for (let k = 0; k < 20; k++) {
      candidates.push(xn.map(v => Math.min(1, Math.max(0, v + (Math.random() - 0.5) * 0.1))));
    }
  }
  // 评估
  let bestCands = candidates
    .map(c => ({ x: c, val: acqFn(c) }))
    .sort((a, b) => b.val - a.val)
    .slice(0, 20);
  // 局部细化 top 候选
  let bestAcq = bestCands[0];
  for (const cand of bestCands) {
    let x = cand.x.slice();
    let val = cand.val;
    for (let iter = 0; iter < 50; iter++) {
      const step = 0.05 * Math.pow(0.9, iter);
      let improved = false;
      for (let d = 0; d < x.length; d++) {
        for (const sgn of [1, -1]) {
          const xt = x.slice(); xt[d] = Math.min(1, Math.max(0, xt[d] + sgn * step));
          const vt = acqFn(xt);
          if (vt > val) { val = vt; x = xt; improved = true; }
        }
      }
      if (!improved) break;
    }
    if (val > bestAcq.val) bestAcq = { x, val };
  }

  // 建议点 (反归一化)
  const suggestXRaw = denormalizeX(bestAcq.x);
  const predAtSuggest = gp.predict(bestAcq.x);
  const predYRaw = predAtSuggest.mean * yStd + yMean;
  const predStdRaw = predAtSuggest.std * yStd;

  state.gp = { model: gp, yMean, yStd, Xnorm, yRaw, valid };
  state.lastSuggestion = { x: suggestXRaw, xNorm: bestAcq.x, acqVal: bestAcq.val, predMean: predYRaw, predStd: predStdRaw };

  renderResults({ bestIdx, bestY, bestX: valid[bestIdx].x, suggestXRaw, predYRaw, predStdRaw, acqVal: bestAcq.val, acqFunc, kappa });
  renderModelInfo(gp, yMean, yStd, valid.length);
  renderViz();
  toast(t('optDone'), 'success');
}

/* =========================================================================
 *  结果渲染
 * ========================================================================= */
function renderResults(payload) {
  state.lastResults = payload;
  state.lastView = 'results';
  const { bestIdx, bestY, bestX, suggestXRaw, predYRaw, predStdRaw, acqVal, acqFunc, kappa } = payload;
  const pnames = state.params.map(p => p.name);
  const fmt = v => (typeof v === 'number') ? v.toFixed(4) : v;
  const isMax = document.getElementById('optGoal').value === 'max';
  const ci = `[${(predYRaw - 1.96 * predStdRaw).toFixed(3)}, ${(predYRaw + 1.96 * predStdRaw).toFixed(3)}]`;
  document.getElementById('resultsBlock').innerHTML = `
    <div class="result-grid">
      <div class="result-card">
        <div class="label">${t('bestY', isMax)}</div>
        <div class="value big">${fmt(bestY)}</div>
        <div class="sub">${t('record', bestIdx + 1)}</div>
      </div>
      <div class="result-card">
        <div class="label">${t('suggestNext')}</div>
        <div class="value suggest">${suggestXRaw.map(fmt).join(', ')}</div>
        <div class="sub">${t('acqLabel', acqFunc, acqVal, kappa)}</div>
      </div>
      <div class="result-card full">
        <div class="label">${t('optParams')}</div>
        <div class="value">${pnames.map((n, i) => `<span class="tag blue">${escapeHtml(n)} = ${fmt(bestX[i])}</span>`).join(' ')}</div>
      </div>
      <div class="result-card full">
        <div class="label">${t('suggestPred')}</div>
        <div class="value">μ = ${fmt(predYRaw)},  σ = ${fmt(predStdRaw)}</div>
        <div class="sub">${t('ci', ci)}</div>
      </div>
    </div>
    <div class="help">${t('tip')}</div>
  `;
}

function renderModelInfo(gp, yMean, yStd, n) {
  const { logL, logSf, logSn } = gp.params;
  const l = Math.exp(logL), sf = Math.exp(logSf), sn = Math.exp(logSn);
  document.getElementById('modelInfo').innerHTML = `
    <div class="stats" style="flex-direction: column; gap: 6px;">
      <div class="stat">${t('trainData')}: <b>${t('nRecords', n)}</b></div>
      <div class="stat">${t('kernelFn')}: <b>${gp.kernelType}</b></div>
      <div class="stat">${t('lengthScale')}: <b>${l.toFixed(4)}</b> ${t('normSpace')}</div>
      <div class="stat">${t('signalStd')}: <b>${sf.toFixed(4)}</b> ${t('stdSpace')}</div>
      <div class="stat">${t('noiseStd')}: <b>${sn.toFixed(4)}</b> ${t('stdSpace')}</div>
      <div class="stat">${t('snr')}: <b>${(sf / Math.max(sn, 1e-8)).toFixed(2)}</b></div>
      <div class="stat">${t('lml')}: <b>${gp.lml.toFixed(3)}</b></div>
      <div class="stat">${t('yMeanStd')}: <b>${yMean.toFixed(3)} / ${yStd.toFixed(3)}</b></div>
    </div>
  `;
}

function clearResults() {
  document.getElementById('resultsBlock').innerHTML = `<div class="empty">${t('runToSee')}</div>`;
  document.getElementById('modelInfo').innerHTML = `<div class="empty">${t('notFitted')}</div>`;
  document.getElementById('vizArea').innerHTML = `<div class="empty">${t('needData2')}</div>`;
  document.getElementById('vizTabs').innerHTML = '';
  state.gp = null;
  state.lastSuggestion = null;
  state.lastResults = null;
  state.lastVerify = null;
  state.lastView = null;
}

/* =========================================================================
 *  验证当前最优
 * ========================================================================= */
function verifyOptimum() {
  if (!state.gp) { toast(t('needRunOpt'), 'error'); return; }
  const { model, yMean, yStd, valid } = state.gp;
  const isMax = document.getElementById('optGoal').value === 'max';
  let bestIdx = 0, bestY = valid[0].y;
  for (let i = 1; i < valid.length; i++) {
    if ((isMax && valid[i].y > bestY) || (!isMax && valid[i].y < bestY)) {
      bestY = valid[i].y; bestIdx = i;
    }
  }
  const xBestNorm = normalizeX(valid[bestIdx].x);
  const pred = model.predict(xBestNorm);
  const predMean = pred.mean * yStd + yMean;
  const predStd = pred.std * yStd;
  const err = Math.abs(predMean - bestY);
  const withinCI = Math.abs(bestY - predMean) <= 1.96 * predStd;

  // 在最优点附近采样, 看采集函数值
  const acqFunc = document.getElementById('acqFunc').value;
  const kappa = +document.getElementById('acqKappa').value;
  const yBestNorm = (bestY - yMean) / yStd;
  let acqVal;
  if (acqFunc === 'ei') acqVal = Acquisitions.ei(model, xBestNorm, yBestNorm, kappa);
  else if (acqFunc === 'ucb') acqVal = Acquisitions.ucb(model, xBestNorm, yBestNorm, kappa);
  else acqVal = Acquisitions.pi(model, xBestNorm, yBestNorm, kappa);

  // 局部不确定性: 检查邻域内最大标准差
  let localMaxStd = 0;
  for (let i = 0; i < 200; i++) {
    const xn = xBestNorm.map(v => Math.min(1, Math.max(0, v + (Math.random() - 0.5) * 0.1)));
    const s = model.predict(xn).std * yStd;
    if (s > localMaxStd) localMaxStd = s;
  }

  // 全局最大不确定性与最优的对比
  const yRange = Math.max(...valid.map(d => d.y)) - Math.min(...valid.map(d => d.y));
  const confKey = predStd < yRange * 0.05 ? 'high' : (predStd < yRange * 0.15 ? 'mid' : 'low');

  // 缓存计算结果, 供语言切换时重渲染
  state.lastVerify = { bestIdx, bestY, valid: valid.map(d => ({ x: d.x.slice(), y: d.y })), predMean, predStd, err, withinCI, acqFunc, acqVal, localMaxStd, confKey };
  state.lastView = 'verify';
  _renderVerify();
  toast(t('verifyDone'), 'success');
}

function _renderVerify() {
  const v = state.lastVerify;
  if (!v) return;
  const confidence = t(v.confKey);
  const confColor = v.confKey === 'high' ? 'green' : 'orange';
  document.getElementById('resultsBlock').innerHTML = `
    <div class="result-card">
      <div class="label">${t('verifyTitle')}</div>
      <div class="value">${t('obsY')} = <span class="tag green">${v.bestY.toFixed(4)}</span></div>
      <div class="sub">${t('record', v.bestIdx + 1)} · ${state.params.map((p, i) => escapeHtml(p.name) + '=' + v.valid[v.bestIdx].x[i].toFixed(3)).join(', ')}</div>
    </div>
    <div class="result-card">
      <div class="label">${t('predAtBest')}</div>
      <div class="value">μ = ${v.predMean.toFixed(4)},  σ = ${v.predStd.toFixed(4)}</div>
      <div class="sub">${t('predErr', v.err)} · 95% CI: [${(v.predMean - 1.96 * v.predStd).toFixed(3)}, ${(v.predMean + 1.96 * v.predStd).toFixed(3)}]</div>
    </div>
    <div class="result-card">
      <div class="label">${t('confidence')}</div>
      <div class="value"><span class="tag ${confColor}">${confidence}</span> · ${t('modelGrasp')}</div>
      <div class="sub">${t('residInCI', v.withinCI)} · ${t('localMaxStd', v.localMaxStd)}</div>
    </div>
    <div class="result-card">
      <div class="label">${t('acqAtBest')}</div>
      <div class="value">${v.acqFunc.toUpperCase()} = ${v.acqVal.toFixed(4)}</div>
      <div class="sub">${v.acqVal < 1e-3 ? t('acqNearZero') : t('acqHasValue')}</div>
    </div>
    <div class="result-card">
      <div class="label">${t('conclusion')}</div>
      <div class="value">${v.confKey === 'high' && v.acqVal < 1e-3 ? t('reliable') : t('continueTest')}</div>
    </div>
  `;
}

/* =========================================================================
 *  采纳建议点 (作为新行, y 留空)
 * ========================================================================= */
function acceptSuggestion() {
  if (!state.lastSuggestion) { toast(t('needSuggestion'), 'error'); return; }
  addRow(state.lastSuggestion.x.map(v => +v.toFixed(4)), '');
  toast(t('accepted'), 'success');
}

/* =========================================================================
 *  可视化
 * ========================================================================= */
// 获取可视化 canvas 可用宽度 (vizArea 内部宽度 - viz-container padding)
function getVizCanvasWidth() {
  const area = document.getElementById('vizArea');
  if (!area) return 900;
  return Math.max(400, area.clientWidth - 16);
}
function renderViz() {
  if (!state.gp) return;
  const dim = state.params.length;
  const tabs = [];
  tabs.push(`<button class="${state.vizMode === 'convergence' ? 'active' : ''}" onclick="setVizMode('convergence')">${t('vizTabConv')}</button>`);
  if (dim === 1) {
    tabs.push(`<button class="${state.vizMode === 'gp1d' ? 'active' : ''}" onclick="setVizMode('gp1d')">${t('vizTab1d')}</button>`);
  }
  if (dim === 2) {
    tabs.push(`<button class="${state.vizMode === 'heatmap' ? 'active' : ''}" onclick="setVizMode('heatmap')">${t('vizTab2d')}</button>`);
    tabs.push(`<button class="${state.vizMode === 'surface3d' ? 'active' : ''}" onclick="setVizMode('surface3d')">${t('vizTab3d')}</button>`);
  }
  if (dim >= 2) {
    tabs.push(`<button class="${state.vizMode === 'slice' ? 'active' : ''}" onclick="setVizMode('slice')">${t('vizTabSlice')}</button>`);
  }
  document.getElementById('vizTabs').innerHTML = tabs.join('');
  drawViz();
}
function setVizMode(mode) {
  state.vizMode = mode;
  renderViz();
}
function drawViz() {
  const area = document.getElementById('vizArea');
  if (state.vizMode === 'convergence') drawConvergence(area);
  else if (state.vizMode === 'gp1d') drawGP1D(area);
  else if (state.vizMode === 'heatmap') drawHeatmap(area);
  else if (state.vizMode === 'surface3d') drawSurface3D(area);
  else if (state.vizMode === 'slice') drawSlices(area);
}

function drawConvergence(area) {
  const { valid } = state.gp;
  const isMax = document.getElementById('optGoal').value === 'max';
  let cumBest = isMax ? -Infinity : Infinity;
  const series = valid.map(d => {
    if ((isMax && d.y > cumBest) || (!isMax && d.y < cumBest)) cumBest = d.y;
    return cumBest;
  });
  const W = getVizCanvasWidth(), H = 360, pad = { l: 60, r: 25, t: 25, b: 50 };
  const yMin = Math.min(...series), yMax = Math.max(...series);
  const yPad = (yMax - yMin) * 0.1 || 1;
  const yLo = yMin - yPad, yHi = yMax + yPad;
  const sx = i => pad.l + (i - 1) / Math.max(series.length - 1, 1) * (W - pad.l - pad.r);
  const sy = v => H - pad.b - (v - yLo) / (yHi - yLo) * (H - pad.t - pad.b);
  const C = TC();

  const dpr = window.devicePixelRatio || 1;
  let html = `<div class="viz-title"><span>${t('convTitle')}</span><span>${t('currentBest', cumBest)}</span></div>`;
  html += `<canvas id="convCanvas" width="${W * dpr}" height="${H * dpr}" style="width:${W}px;height:${H}px;"></canvas>`;
  area.innerHTML = `<div class="viz-container">${html}</div>`;
  const cv = document.getElementById('convCanvas');
  const ctx = cv.getContext('2d');
  ctx.scale(dpr, dpr);
  ctx.fillStyle = C.canvasBg; ctx.fillRect(0, 0, W, H);
  // 网格
  ctx.strokeStyle = C.grid; ctx.lineWidth = 1;
  for (let i = 0; i <= 5; i++) {
    const y = pad.t + i / 5 * (H - pad.t - pad.b);
    ctx.beginPath(); ctx.moveTo(pad.l, y); ctx.lineTo(W - pad.r, y); ctx.stroke();
    const v = yHi - i / 5 * (yHi - yLo);
    ctx.fillStyle = C.axis; ctx.font = '13px monospace';
    ctx.fillText(v.toFixed(3), 8, y + 4);
  }
  for (let i = 0; i < series.length; i++) {
    const x = sx(i + 1);
    ctx.strokeStyle = C.grid;
    ctx.beginPath(); ctx.moveTo(x, pad.t); ctx.lineTo(x, H - pad.b); ctx.stroke();
    ctx.fillStyle = C.axis; ctx.font = '13px monospace';
    ctx.fillText(i + 1, x - 5, H - pad.b + 18);
  }
  // 轴
  ctx.strokeStyle = C.axis; ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(pad.l, pad.t); ctx.lineTo(pad.l, H - pad.b); ctx.lineTo(W - pad.r, H - pad.b); ctx.stroke();
  // 折线
  ctx.strokeStyle = C.accent; ctx.lineWidth = 2.5; ctx.lineJoin = 'round'; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(sx(1), sy(series[0]));
  for (let i = 1; i < series.length; i++) ctx.lineTo(sx(i + 1), sy(series[i]));
  ctx.stroke();
  // 点
  ctx.fillStyle = C.accent; ctx.strokeStyle = C.ptOutline; ctx.lineWidth = 1.5;
  series.forEach((v, i) => {
    ctx.beginPath(); ctx.arc(sx(i + 1), sy(v), 4, 0, 2 * Math.PI); ctx.fill(); ctx.stroke();
  });
  // 轴标签
  ctx.fillStyle = C.label; ctx.font = '13px sans-serif';
  ctx.fillText(t('convX'), W / 2 - 25, H - 8);
  ctx.save(); ctx.translate(18, H / 2); ctx.rotate(-Math.PI / 2); ctx.fillText(t('convY'), -25, 0); ctx.restore();
}

function drawGP1D(area) {
  const { model, yMean, yStd, Xnorm, yRaw } = state.gp;
  const W = getVizCanvasWidth(), H = 420, pad = { l: 60, r: 25, t: 25, b: 50 };
  const N = 200;
  const p = state.params[0];
  const xsNorm = [];
  for (let i = 0; i < N; i++) xsNorm.push([i / (N - 1)]);
  const preds = xsNorm.map(x => model.predict(x));
  const meansRaw = preds.map(p => p.mean * yStd + yMean);
  const stdsRaw = preds.map(p => p.std * yStd);
  const yObs = yRaw;
  const all = [...meansRaw, ...yObs, ...meansRaw.map((m, i) => m + 1.96 * stdsRaw[i]), ...meansRaw.map((m, i) => m - 1.96 * stdsRaw[i])];
  let yLo = Math.min(...all), yHi = Math.max(...all);
  const yPad = (yHi - yLo) * 0.1 || 1;
  yLo -= yPad; yHi += yPad;
  const xLo = p.min, xHi = p.max;
  const sx = v => pad.l + (v - xLo) / (xHi - xLo) * (W - pad.l - pad.r);
  const sy = v => H - pad.b - (v - yLo) / (yHi - yLo) * (H - pad.t - pad.b);

  const dpr = window.devicePixelRatio || 1;
  let html = `<div class="viz-title"><span>${t('gp1dTitle', escapeHtml(p.name), p)}</span><span>${t('gp1dLegend', p)}</span></div>`;
  html += `<canvas id="gp1dCanvas" width="${W * dpr}" height="${H * dpr}" style="width:${W}px;height:${H}px;"></canvas>`;
  area.innerHTML = `<div class="viz-container">${html}</div>`;
  const cv = document.getElementById('gp1dCanvas');
  const ctx = cv.getContext('2d');
  ctx.scale(dpr, dpr);
  const C = TC();
  ctx.fillStyle = C.canvasBg; ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = C.grid; ctx.lineWidth = 1;
  for (let i = 0; i <= 5; i++) {
    const y = pad.t + i / 5 * (H - pad.t - pad.b);
    ctx.beginPath(); ctx.moveTo(pad.l, y); ctx.lineTo(W - pad.r, y); ctx.stroke();
    const v = yHi - i / 5 * (yHi - yLo);
    ctx.fillStyle = C.axis; ctx.font = '13px monospace';
    ctx.fillText(v.toFixed(3), 8, y + 4);
  }
  for (let i = 0; i <= 5; i++) {
    const x = pad.l + i / 5 * (W - pad.l - pad.r);
    ctx.strokeStyle = C.grid;
    ctx.beginPath(); ctx.moveTo(x, pad.t); ctx.lineTo(x, H - pad.b);
    ctx.stroke();
    const v = xLo + i / 5 * (xHi - xLo);
    ctx.fillStyle = C.axis; ctx.font = '13px monospace';
    ctx.fillText(v.toFixed(3), x - 14, H - pad.b + 18);
  }
  ctx.strokeStyle = C.axis; ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(pad.l, pad.t); ctx.lineTo(pad.l, H - pad.b); ctx.lineTo(W - pad.r, H - pad.b); ctx.stroke();
  ctx.fillStyle = C.accentShadow;
  ctx.beginPath();
  ctx.moveTo(sx(xLo), sy(meansRaw[0] - 1.96 * stdsRaw[0]));
  for (let i = 0; i < N; i++) ctx.lineTo(sx(p.min + i / (N - 1) * (p.max - p.min)), sy(meansRaw[i] - 1.96 * stdsRaw[i]));
  for (let i = N - 1; i >= 0; i--) ctx.lineTo(sx(p.min + i / (N - 1) * (p.max - p.min)), sy(meansRaw[i] + 1.96 * stdsRaw[i]));
  ctx.closePath(); ctx.fill();
  ctx.strokeStyle = C.accentDash; ctx.lineWidth = 1; ctx.setLineDash([4, 4]);
  ctx.beginPath();
  for (let i = 0; i < N; i++) {
    const x = sx(p.min + i / (N - 1) * (p.max - p.min));
    const y = sy(meansRaw[i] + stdsRaw[i]);
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.stroke();
  ctx.beginPath();
  for (let i = 0; i < N; i++) {
    const x = sx(p.min + i / (N - 1) * (p.max - p.min));
    const y = sy(meansRaw[i] - stdsRaw[i]);
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.strokeStyle = C.accent; ctx.lineWidth = 2.5; ctx.lineJoin = 'round'; ctx.lineCap = 'round';
  ctx.beginPath();
  for (let i = 0; i < N; i++) {
    const x = sx(p.min + i / (N - 1) * (p.max - p.min));
    const y = sy(meansRaw[i]);
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.stroke();
  ctx.fillStyle = C.obs; ctx.strokeStyle = C.ptOutline; ctx.lineWidth = 1.5;
  for (let i = 0; i < Xnorm.length; i++) {
    const xRaw = p.min + Xnorm[i][0] * (p.max - p.min);
    ctx.beginPath(); ctx.arc(sx(xRaw), sy(yObs[i]), 5, 0, 2 * Math.PI); ctx.fill(); ctx.stroke();
  }
  if (state.lastSuggestion) {
    const sxv = state.lastSuggestion.x[0];
    ctx.strokeStyle = C.sugg; ctx.lineWidth = 1.5; ctx.setLineDash([6, 4]);
    ctx.beginPath(); ctx.moveTo(sx(sxv), pad.t); ctx.lineTo(sx(sxv), H - pad.b); ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = C.sugg; ctx.strokeStyle = C.ptOutline; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.arc(sx(sxv), sy(state.lastSuggestion.predMean), 6, 0, 2 * Math.PI); ctx.fill(); ctx.stroke();
  }
  ctx.fillStyle = C.label; ctx.font = '13px sans-serif';
  ctx.fillText(escapeHtml(p.name), W / 2 - 10, H - 8);
  ctx.save(); ctx.translate(18, H / 2); ctx.rotate(-Math.PI / 2); ctx.fillText('y', -5, 0); ctx.restore();
}

function drawHeatmap(area) {
  const { model, yMean, yStd, Xnorm } = state.gp;
  const W = getVizCanvasWidth(), H = Math.round(W * 420 / 560), pad = { l: 70, r: 55, t: 30, b: 55 };
  const N = 80;
  const [p1, p2] = state.params;
  // 预测网格
  const grid = [];
  let vMin = Infinity, vMax = -Infinity;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const x = [i / (N - 1), j / (N - 1)];
      const pred = model.predict(x);
      const m = pred.mean * yStd + yMean;
      grid.push({ i, j, mean: m, std: pred.std * yStd });
      if (m < vMin) vMin = m;
      if (m > vMax) vMax = m;
    }
  }
  const sx = v => pad.l + (v - p1.min) / (p1.max - p1.min) * (W - pad.l - pad.r);
  const sy = v => H - pad.b - (v - p2.min) / (p2.max - p2.min) * (H - pad.t - pad.b);
  const cellW = (W - pad.l - pad.r) / N, cellH = (H - pad.t - pad.b) / N;

  const dpr = window.devicePixelRatio || 1;
  let html = `<div class="viz-title"><span>${t('heatTitle', escapeHtml(p1.name), escapeHtml(p2.name))}</span><span>${t('heatLegend')}</span></div>`;
  html += `<canvas id="hmCanvas" width="${W * dpr}" height="${H * dpr}" style="width:${W}px;height:${H}px;"></canvas>`;
  area.innerHTML = `<div class="viz-container">${html}</div>`;
  const cv = document.getElementById('hmCanvas');
  const ctx = cv.getContext('2d');
  ctx.scale(dpr, dpr);
  const C = TC();
  ctx.fillStyle = C.canvasBg; ctx.fillRect(0, 0, W, H);
  // 绘制热力图
  for (const cell of grid) {
    const t = (cell.mean - vMin) / (vMax - vMin || 1);
    ctx.fillStyle = viridis(t);
    const x = pad.l + cell.i * cellW;
    const y = pad.t + (N - 1 - cell.j) * cellH;
    ctx.fillRect(x, y, cellW + 1, cellH + 1);
  }
  // 轴
  ctx.strokeStyle = C.axis; ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(pad.l, pad.t); ctx.lineTo(pad.l, H - pad.b); ctx.lineTo(W - pad.r, H - pad.b); ctx.stroke();
  // 刻度
  for (let i = 0; i <= 5; i++) {
    const x = pad.l + i / 5 * (W - pad.l - pad.r);
    const v = p1.min + i / 5 * (p1.max - p1.min);
    ctx.fillStyle = C.axis; ctx.font = '12px monospace';
    ctx.fillText(v.toFixed(2), x - 12, H - pad.b + 18);
  }
  for (let i = 0; i <= 5; i++) {
    const y = H - pad.b - i / 5 * (H - pad.t - pad.b);
    const v = p2.min + i / 5 * (p2.max - p2.min);
    ctx.fillStyle = C.axis; ctx.font = '12px monospace';
    ctx.fillText(v.toFixed(2), 12, y + 4);
  }
  // 观测点
  ctx.fillStyle = C.obs; ctx.strokeStyle = C.ptHalo; ctx.lineWidth = 1.5;
  for (let i = 0; i < Xnorm.length; i++) {
    const xr = denormalizeX(Xnorm[i]);
    ctx.beginPath(); ctx.arc(sx(xr[0]), sy(xr[1]), 5, 0, 2 * Math.PI); ctx.fill(); ctx.stroke();
  }
  // 建议点
  if (state.lastSuggestion) {
    const xs = state.lastSuggestion.x;
    ctx.fillStyle = C.sugg; ctx.strokeStyle = C.ptHalo; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(sx(xs[0]), sy(xs[1]), 7, 0, 2 * Math.PI); ctx.fill(); ctx.stroke();
  }
  // 色条
  const cbX = W - pad.r + 12, cbW = 16;
  for (let i = 0; i < H - pad.t - pad.b; i++) {
    const t = 1 - i / (H - pad.t - pad.b);
    ctx.fillStyle = viridis(t);
    ctx.fillRect(cbX, pad.t + i, cbW, 1);
  }
  ctx.strokeStyle = C.axis; ctx.lineWidth = 1;
  ctx.strokeRect(cbX, pad.t, cbW, H - pad.t - pad.b);
  ctx.fillStyle = C.axis; ctx.font = '12px monospace';
  ctx.fillText(vMax.toFixed(2), cbX + cbW + 4, pad.t + 10);
  ctx.fillText(vMin.toFixed(2), cbX + cbW + 4, H - pad.b);
  // 标签
  ctx.fillStyle = C.label; ctx.font = '13px sans-serif';
  ctx.fillText(escapeHtml(p1.name), W / 2 - 10, H - 10);
  ctx.save(); ctx.translate(18, H / 2); ctx.rotate(-Math.PI / 2); ctx.fillText(escapeHtml(p2.name), -25, 0); ctx.restore();
}

/* -------------------------------------------------------------------------
 *  3D 曲面 (2 参数): 等距/方位角投影 GP 均值面, 含观测点与建议点
 *  世界坐标 (u, v, w): u,v ∈ 参数平面, w = GP 均值
 *  投影: 先绕 w 轴旋转方位角 φ, 再做仰角 θ 的倾斜
 * ------------------------------------------------------------------------- */
function drawSurface3D(area) {
  const { model, yMean, yStd, Xnorm } = state.gp;
  const [p1, p2] = state.params;
  const N = 32;                      // 网格分辨率
  const W = getVizCanvasWidth();
  const H = Math.round(W * 540 / 760);
  const cx = W / 2, cy = H * 0.58;
  const scale = W / 760 * 9.5;       // 世界 → 屏幕缩放 (按宽度比例)
  const elev = 32 * Math.PI / 180;   // 仰角 (固定)
  let azim = state.surf3dAzimuth * Math.PI / 180;

  // 预测网格
  const grid = new Array(N + 1);
  let vMin = Infinity, vMax = -Infinity;
  for (let i = 0; i <= N; i++) {
    grid[i] = new Array(N + 1);
    for (let j = 0; j <= N; j++) {
      const pred = model.predict([i / N, j / N]);
      const w = pred.mean * yStd + yMean;
      grid[i][j] = w;
      if (w < vMin) vMin = w;
      if (w > vMax) vMax = w;
    }
  }
  const wRange = Math.max(vMax - vMin, 1e-8);
  // 将 w 归一到 [-1, 1] 用于投影 (控制曲面高度)
  const wToScreen = w => (w - (vMin + vMax) / 2) / (wRange / 2) * (N / 3);  // N/3 控制高度, 较扁平更易读

  // 3D → 2D 投影
  const project = (u, v, w) => {
    // u, v ∈ [0, N]; 居中到 [-N/2, N/2]
    const uu = u - N / 2, vv = v - N / 2, ww = wToScreen(w);
    // 绕 w 轴旋转
    const x = uu * Math.cos(azim) - vv * Math.sin(azim);
    const yd = uu * Math.sin(azim) + vv * Math.cos(azim);   // 深度方向
    // 仰角倾斜: 屏幕高度 z 由深度 yd 和高度 ww 决定
    const z = yd * Math.sin(elev) + ww * Math.cos(elev);
    const depth = yd * Math.cos(elev) - ww * Math.sin(elev);
    return { sx: cx + x * scale, sy: cy - z * scale, depth };
  };

  const dpr = window.devicePixelRatio || 1;
  let html = `<div class="viz-title"><span>${t('surf3dTitle', escapeHtml(p1.name), escapeHtml(p2.name))}</span><span>${t('surf3dLegend')}</span></div>`;
  html += `<div style="display:flex; align-items:center; gap:10px; margin-bottom:6px; font-size:12px; color:var(--text-dim);">
    <label style="margin:0;">${t('surf3dRotate')}</label>
    <input type="range" min="-180" max="180" step="5" value="${state.surf3dAzimuth}" style="flex:1; max-width:280px;" oninput="setSurf3dAzimuth(+this.value)">
    <span id="surf3dAzVal" style="font-family:monospace; min-width:42px;">${state.surf3dAzimuth}°</span>
  </div>`;
  html += `<canvas id="surf3dCanvas" width="${W * dpr}" height="${H * dpr}" style="width:${W}px;height:${H}px;"></canvas>`;
  area.innerHTML = `<div class="viz-container">${html}</div>`;

  const cv = document.getElementById('surf3dCanvas');
  const ctx = cv.getContext('2d');
  ctx.scale(dpr, dpr);
  const C = TC();
  ctx.fillStyle = C.canvasBg; ctx.fillRect(0, 0, W, H);

  // 收集四边形面片, 按平均深度从后向前绘制 (画家算法)
  const faces = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const w00 = grid[i][j], w10 = grid[i + 1][j], w11 = grid[i + 1][j + 1], w01 = grid[i][j + 1];
      const p00 = project(i, j, w00), p10 = project(i + 1, j, w10), p11 = project(i + 1, j + 1, w11), p01 = project(i, j + 1, w01);
      const avgW = (w00 + w10 + w11 + w01) / 4;
      const avgDepth = (p00.depth + p10.depth + p11.depth + p01.depth) / 4;
      faces.push({ pts: [p00, p10, p11, p01], avgW, avgDepth });
    }
  }
  faces.sort((a, b) => b.avgDepth - a.avgDepth);  // depth 大的在后 (远离观察者)

  // 绘制底面投影 (浅色网格, 帮助定位)
  ctx.strokeStyle = C.gridFaint; ctx.lineWidth = 0.5;
  for (let i = 0; i <= N; i += 4) {
    const a = project(i, 0, vMin), b = project(i, N, vMin);
    ctx.beginPath(); ctx.moveTo(a.sx, a.sy); ctx.lineTo(b.sx, b.sy); ctx.stroke();
    const c = project(0, i, vMin), d = project(N, i, vMin);
    ctx.beginPath(); ctx.moveTo(c.sx, c.sy); ctx.lineTo(d.sx, d.sy); ctx.stroke();
  }

  // 绘制曲面
  ctx.lineWidth = 0.4; ctx.strokeStyle = C.polyStroke; ctx.lineJoin = 'round';
  for (const f of faces) {
    const col = viridis((f.avgW - vMin) / wRange);
    ctx.fillStyle = col;
    ctx.beginPath();
    ctx.moveTo(f.pts[0].sx, f.pts[0].sy);
    for (let k = 1; k < 4; k++) ctx.lineTo(f.pts[k].sx, f.pts[k].sy);
    ctx.closePath(); ctx.fill(); ctx.stroke();
  }

  // 绘制坐标轴: 从底面原点沿 x/y/z 方向
  const drawAxis = (u0, v0, w0, u1, v1, w1, color, label) => {
    const a = project(u0, v0, w0), b = project(u1, v1, w1);
    ctx.strokeStyle = color; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(a.sx, a.sy); ctx.lineTo(b.sx, b.sy); ctx.stroke();
    ctx.fillStyle = color; ctx.font = '12px sans-serif';
    ctx.fillText(label, b.sx + 4, b.sy + 4);
  };
  drawAxis(0, 0, vMin, N, 0, vMin, C.sugg, escapeHtml(p1.name));
  drawAxis(0, 0, vMin, 0, N, vMin, C.warn, escapeHtml(p2.name));
  drawAxis(0, 0, vMin, 0, 0, vMax, C.accent, 'y');

  // 投影观测点 (红色) 到曲面高度
  ctx.fillStyle = C.obs; ctx.strokeStyle = C.ptHalo; ctx.lineWidth = 1.5;
  for (let i = 0; i < Xnorm.length; i++) {
    const u = Xnorm[i][0] * N, v = Xnorm[i][1] * N;
    const w = model.predict([Xnorm[i][0], Xnorm[i][1]]).mean * yStd + yMean;
    const p = project(u, v, w);
    ctx.beginPath(); ctx.arc(p.sx, p.sy, 5, 0, 2 * Math.PI); ctx.fill(); ctx.stroke();
  }
  // 投影建议点 (蓝色)
  if (state.lastSuggestion) {
    const xn = state.lastSuggestion.xNorm || normalizeX(state.lastSuggestion.x);
    const u = xn[0] * N, v = xn[1] * N;
    const w = state.lastSuggestion.predMean;
    const p = project(u, v, w);
    ctx.fillStyle = C.sugg; ctx.strokeStyle = C.ptHalo; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(p.sx, p.sy, 7, 0, 2 * Math.PI); ctx.fill(); ctx.stroke();
  }

  // 色条
  const cbX = W - 50, cbW = 14, cbY0 = 60, cbH = H - 120;
  for (let i = 0; i < cbH; i++) {
    const tt = 1 - i / cbH;
    ctx.fillStyle = viridis(tt);
    ctx.fillRect(cbX, cbY0 + i, cbW, 1);
  }
  ctx.strokeStyle = C.axis; ctx.lineWidth = 1;
  ctx.strokeRect(cbX, cbY0, cbW, cbH);
  ctx.fillStyle = C.axis; ctx.font = '12px monospace';
  ctx.fillText(vMax.toFixed(2), cbX + cbW + 4, cbY0 + 10);
  ctx.fillText(vMin.toFixed(2), cbX + cbW + 4, cbY0 + cbH);
}

function setSurf3dAzimuth(deg) {
  state.surf3dAzimuth = deg;
  const el = document.getElementById('surf3dAzVal');
  if (el) el.textContent = deg + '°';
  drawSurface3D(document.getElementById('vizArea'));
}

function drawSlices(area) {
  // 对每个维度切片, 其它维度固定在当前最优点
  const { model, yMean, yStd, Xnorm, valid } = state.gp;
  const isMax = document.getElementById('optGoal').value === 'max';
  let bestIdx = 0, bestY = valid[0].y;
  for (let i = 1; i < valid.length; i++) {
    if ((isMax && valid[i].y > bestY) || (!isMax && valid[i].y < bestY)) { bestY = valid[i].y; bestIdx = i; }
  }
  const xBestNorm = Xnorm[bestIdx];
  const dim = state.params.length;
  // 按容器宽度计算列数, 让多图整体对齐
  const totalW = getVizCanvasWidth();
  const gap = 10;
  const minCanvasW = 360;
  const cols = Math.min(dim, Math.max(1, Math.floor((totalW + gap) / (minCanvasW + gap))));
  const W = Math.floor((totalW - (cols - 1) * gap) / cols);
  const H = Math.round(W * 280 / 440);
  const pad = { l: 50, r: 20, t: 20, b: 40 };
  const N = 100;
  const dpr = window.devicePixelRatio || 1;
  const C = TC();
  let html = `<div class="viz-title"><span>${t('sliceTitle')}</span><span>${t('sliceLegend')}</span></div>`;
  html += `<div style="display:grid; grid-template-columns: repeat(${cols}, ${W}px); gap: ${gap}px; justify-content: center;">`;
  for (let d = 0; d < dim; d++) {
    html += `<canvas id="sliceCanvas${d}" width="${W * dpr}" height="${H * dpr}" style="width:${W}px;height:${H}px;"></canvas>`;
  }
  html += '</div>';
  area.innerHTML = `<div class="viz-container">${html}</div>`;
  for (let d = 0; d < dim; d++) {
    const cv = document.getElementById('sliceCanvas' + d);
    const ctx = cv.getContext('2d');
    ctx.scale(dpr, dpr);
    ctx.fillStyle = C.canvasBg; ctx.fillRect(0, 0, W, H);
    const p = state.params[d];
    const preds = [];
    for (let i = 0; i < N; i++) {
      const x = xBestNorm.slice();
      x[d] = i / (N - 1);
      const pred = model.predict(x);
      preds.push({ mean: pred.mean * yStd + yMean, std: pred.std * yStd });
    }
    const all = preds.flatMap(p => [p.mean - p.std, p.mean + p.std]);
    let yLo = Math.min(...all), yHi = Math.max(...all);
    const yPad = (yHi - yLo) * 0.1 || 1;
    yLo -= yPad; yHi += yPad;
    const sx = v => pad.l + (v - p.min) / (p.max - p.min) * (W - pad.l - pad.r);
    const sy = v => H - pad.b - (v - yLo) / (yHi - yLo) * (H - pad.t - pad.b);
    ctx.strokeStyle = C.grid; ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = pad.t + i / 4 * (H - pad.t - pad.b);
      ctx.beginPath(); ctx.moveTo(pad.l, y); ctx.lineTo(W - pad.r, y); ctx.stroke();
      const v = yHi - i / 4 * (yHi - yLo);
      ctx.fillStyle = C.axis; ctx.font = '12px monospace';
      ctx.fillText(v.toFixed(2), 4, y + 4);
    }
    ctx.fillStyle = C.accentShadow;
    ctx.beginPath();
    ctx.moveTo(sx(p.min), sy(preds[0].mean - preds[0].std));
    for (let i = 0; i < N; i++) ctx.lineTo(sx(p.min + i / (N - 1) * (p.max - p.min)), sy(preds[i].mean - preds[i].std));
    for (let i = N - 1; i >= 0; i--) ctx.lineTo(sx(p.min + i / (N - 1) * (p.max - p.min)), sy(preds[i].mean + preds[i].std));
    ctx.closePath(); ctx.fill();
    ctx.strokeStyle = C.accent; ctx.lineWidth = 2.5; ctx.lineJoin = 'round'; ctx.lineCap = 'round';
    ctx.beginPath();
    for (let i = 0; i < N; i++) {
      const x = sx(p.min + i / (N - 1) * (p.max - p.min));
      const y = sy(preds[i].mean);
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();
    if (state.lastSuggestion) {
      const sxv = state.lastSuggestion.x[d];
      ctx.strokeStyle = C.sugg; ctx.lineWidth = 1.5; ctx.setLineDash([5, 3]);
      ctx.beginPath(); ctx.moveTo(sx(sxv), pad.t); ctx.lineTo(sx(sxv), H - pad.b); ctx.stroke();
      ctx.setLineDash([]);
    }
    ctx.strokeStyle = C.axis; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(pad.l, pad.t); ctx.lineTo(pad.l, H - pad.b); ctx.lineTo(W - pad.r, H - pad.b); ctx.stroke();
    ctx.fillStyle = C.label; ctx.font = '13px sans-serif';
    ctx.fillText(escapeHtml(p.name), W / 2 - 10, H - 8);
  }
}

function viridis(t) {
  // 简化的 viridis 色阶
  const stops = [
    [68, 1, 84], [71, 40, 120], [62, 74, 137], [49, 104, 142],
    [38, 130, 142], [31, 158, 137], [53, 183, 121], [109, 205, 89],
    [180, 222, 44], [253, 231, 37]
  ];
  t = Math.max(0, Math.min(1, t));
  const idx = t * (stops.length - 1);
  const i = Math.floor(idx);
  const f = idx - i;
  const a = stops[i], b = stops[Math.min(i + 1, stops.length - 1)];
  const r = Math.round(a[0] + f * (b[0] - a[0]));
  const g = Math.round(a[1] + f * (b[1] - a[1]));
  const bl = Math.round(a[2] + f * (b[2] - a[2]));
  return `rgb(${r},${g},${bl})`;
}

/* =========================================================================
 *  Favicon: 3D 等距投影曲面 (GP 后验风格, 中心峰 + 最优标记)
 * ========================================================================= */
function generateFavicon() {
  const C = TC();
  const N = 8;                  // 网格 0..N
  const cx = 32, baseY = 26, sx = 3.2, sy = 1.5, zs = 17;
  // 双峰曲面 (与示例数据呼应: 主峰在中心, 次峰在角落)
  const zf = (i, j) => {
    const u = (i - 4) / 3, v = (j - 4) / 3;
    return Math.exp(-(u * u + v * v)) + 0.55 * Math.exp(-(((i - 6.5) ** 2 + (j - 6.5) ** 2)) / 4);
  };
  const px = (i, j) => cx + (i - j) * sx;
  const py = (i, j, zv) => baseY + (i + j) * sy - zv * zs;
  // 收集单元格, 按深度 (i+j) 从后向前画 (画家算法)
  const cells = [];
  for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
    const z00 = zf(i, j), z10 = zf(i + 1, j), z11 = zf(i + 1, j + 1), z01 = zf(i, j + 1);
    cells.push({ i, j, z00, z10, z11, z01, avgZ: (z00 + z10 + z11 + z01) / 4, depth: i + j });
  }
  cells.sort((a, b) => a.depth - b.depth);
  let polys = '';
  for (const c of cells) {
    const x0 = px(c.i, c.j),         y0 = py(c.i, c.j, c.z00);
    const x1 = px(c.i + 1, c.j),     y1 = py(c.i + 1, c.j, c.z10);
    const x2 = px(c.i + 1, c.j + 1), y2 = py(c.i + 1, c.j + 1, c.z11);
    const x3 = px(c.i, c.j + 1),     y3 = py(c.i, c.j + 1, c.z01);
    polys += `<polygon points="${x0.toFixed(1)},${y0.toFixed(1)} ${x1.toFixed(1)},${y1.toFixed(1)} ${x2.toFixed(1)},${y2.toFixed(1)} ${x3.toFixed(1)},${y3.toFixed(1)}" fill="${viridis(c.avgZ / 1.5)}" stroke="${C.polyStroke}" stroke-width="0.4" stroke-linejoin="round"/>`;
  }
  // 最优标记 (主峰顶)
  const mx = px(4, 4), my = py(4, 4, zf(4, 4));
  const marker = `<circle cx="${mx.toFixed(1)}" cy="${my.toFixed(1)}" r="2.2" fill="${C.obs}" stroke="${C.ptHalo}" stroke-width="0.6"/>`;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><rect width="64" height="64" fill="${C.canvasBg}"/>${polys}${marker}</svg>`;
  let link = document.querySelector("link[rel='icon']");
  if (!link) { link = document.createElement('link'); link.rel = 'icon'; document.head.appendChild(link); }
  link.type = 'image/svg+xml';
  link.href = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svg)));
}

/* =========================================================================
 *  导入 / 导出
 * ========================================================================= */
function exportJSON() {
  const data = { params: state.params, data: state.data, settings: getSettings() };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  download(blob, 'gp-bo-data.json');
  toast(t('exportedJson'), 'success');
}
function exportCSV() {
  if (state.params.length === 0) { toast(t('noParamsExport'), 'error'); return; }
  const header = state.params.map(p => p.name).join(',') + ',y\n';
  const rows = state.data.map(d => d.x.join(',') + ',' + d.y).join('\n');
  const blob = new Blob([header + rows], { type: 'text/csv' });
  download(blob, 'gp-bo-data.csv');
  toast(t('exportedCsv'), 'success');
}
function importData(event) {
  const file = event.target.files[0];
  if (!file) return;
  // Excel 用 readAsArrayBuffer, JSON/文本用 readAsText
  const isExcel = /\.(xlsx|xls)$/i.test(file.name);
  const reader = new FileReader();
  reader.onload = e => {
    try {
      if (file.name.endsWith('.json')) {
        const obj = JSON.parse(e.target.result);
        state.params = obj.params || [];
        state.data = obj.data || [];
        if (obj.settings) applySettings(obj.settings);
      } else if (isExcel) {
        _importExcel(e.target.result);
      } else {
        // 兼容旧 CSV
        _importCSV(e.target.result);
      }
      renderParams(); renderTable(); clearResults();
      toast(t('imported', state.data.length), 'success');
    } catch (err) {
      toast(t('importFail') + err.message, 'error');
    }
    event.target.value = '';
  };
  if (isExcel) reader.readAsArrayBuffer(file);
  else reader.readAsText(file);
}

// 从 Excel (xlsx/xls) 导入: 第一行为表头, 最后一列为 y
function _importExcel(buf) {
  if (typeof XLSX === 'undefined') throw new Error('XLSX library not loaded');
  const wb = XLSX.read(buf, { type: 'array' });
  const ws = wb.Sheets[wb.SheetNames[0]];
  if (!ws) throw new Error('Empty workbook');
  // header:1 返回数组的数组, 第一行作为表头, 其余为数据行
  const aoa = XLSX.utils.sheet_to_json(ws, { header: 1, blankrows: false, raw: true });
  if (aoa.length === 0) throw new Error('Empty sheet');
  const header = aoa[0].map(String);
  const yIdx = header.length - 1;
  state.params = header.slice(0, -1).map(name => ({ name, min: 0, max: 1, type: 'continuous' }));
  state.data = aoa.slice(1)
    .filter(row => row.length > 0 && row.some(c => c !== null && c !== ''))
    .map(row => {
      const x = [];
      for (let i = 0; i < yIdx; i++) {
        const v = row[i];
        x.push(typeof v === 'number' ? v : parseFloat(v));
      }
      const yCell = row[yIdx];
      const y = (yCell === null || yCell === undefined || yCell === '') ? '' : +yCell;
      return { x, y };
    })
    .filter(d => d.x.every(v => !isNaN(v)));
  _inferParamRanges();
}

// 从 CSV 文本导入 (向后兼容)
function _importCSV(text) {
  const allLines = text.trim().split(/\r?\n/);
  const lines = allLines.filter(l => l.trim() && !l.trim().startsWith('#'));
  const header = lines[0].split(',').map(s => s.trim());
  const yIdx = header.length - 1;
  state.params = header.slice(0, -1).map(name => ({ name, min: 0, max: 1, type: 'continuous' }));
  state.data = lines.slice(1).map(line => {
    const parts = line.split(',').map(s => s.trim());
    const x = parts.slice(0, yIdx).map(Number);
    const yStr = parts[yIdx];
    return { x, y: yStr === '' ? '' : +yStr };
  }).filter(d => d.x.every(v => !isNaN(v)));
  _inferParamRanges();
}

// 根据导入数据自动推断参数范围
function _inferParamRanges() {
  for (let d = 0; d < state.params.length; d++) {
    const vals = state.data.map(r => r.x[d]).filter(v => !isNaN(v));
    if (vals.length) {
      state.params[d].min = Math.min(...vals);
      state.params[d].max = Math.max(...vals);
      if (state.params[d].min === state.params[d].max) {
        state.params[d].min -= 1; state.params[d].max += 1;
      }
    }
  }
}
function getSettings() {
  return {
    goal: document.getElementById('optGoal').value,
    acqFunc: document.getElementById('acqFunc').value,
    kappa: +document.getElementById('acqKappa').value,
    kernel: document.getElementById('kernelType').value,
    nRestarts: +document.getElementById('nRestarts').value,
    nCandidates: +document.getElementById('nCandidates').value
  };
}
function applySettings(s) {
  if (s.goal) document.getElementById('optGoal').value = s.goal;
  if (s.acqFunc) document.getElementById('acqFunc').value = s.acqFunc;
  if (s.kappa) document.getElementById('acqKappa').value = s.kappa;
  if (s.kernel) document.getElementById('kernelType').value = s.kernel;
  if (s.nRestarts) document.getElementById('nRestarts').value = s.nRestarts;
  if (s.nCandidates) document.getElementById('nCandidates').value = s.nCandidates;
}
function download(blob, name) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = name; a.click();
  URL.revokeObjectURL(url);
}

/* =========================================================================
 *  下载模板 (基于当前参数定义生成 Excel 模板)
 * ========================================================================= */
function downloadTemplate() {
  if (typeof XLSX === 'undefined') { toast('XLSX library not loaded', 'error'); return; }
  // 若未定义参数, 使用默认 x1, x2
  let params = state.params;
  if (params.length === 0) {
    params = [
      { name: 'x1', min: 0, max: 10 },
      { name: 'x2', min: 0, max: 10 }
    ];
  }
  // 构造 AOA (数组 of 数组): 第一行表头 + 3 行示例 + 1 空行 + 2 行注释
  const header = params.map(p => p.name).concat(['y']);
  const samplePts = [
    params.map(p => +p.min.toFixed(4)),
    params.map(p => +((p.min + p.max) / 2).toFixed(4)),
    params.map(p => +p.max.toFixed(4))
  ];
  const aoa = [header];
  for (const pt of samplePts) aoa.push(pt.concat(['']));
  aoa.push([]);
  aoa.push(['# ' + t('templateHeader')]);
  aoa.push(['# ' + t('templateNote')]);

  const ws = XLSX.utils.aoa_to_sheet(aoa);
  // 列宽: 表头列宽 12, 注释列加宽
  ws['!cols'] = header.map(() => ({ wch: 12 }));
  ws['!cols'][0] = { wch: 60 };  // 注释列宽

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'data');
  XLSX.writeFile(wb, 'gp-bo-template.xlsx');
  toast(t('templateDownloaded'), 'success');
}

/* =========================================================================
 *  示例数据 (3D 多峰函数:
 *    y = exp(-((x1-1)^2 + (x2-1)^2 + (x3-1)^2))
 *        + 0.7 * exp(-((x1-4)^2 + (x2-4)^2 + (x3-3)^2))
 *  x1, x2, x3 ∈ [0,5], 求最大值
 *  全局峰在 (1,1,1) y=1.0, 局部峰在 (4,4,3) y=0.7
 *  ── 展示 BO 在多峰函数上通过探索找到全局最优的能力
 * ========================================================================= */
function demoFunc(x1, x2, x3) {
  return Math.exp(-((x1 - 1) ** 2 + (x2 - 1) ** 2 + (x3 - 1) ** 2))
       + 0.7 * Math.exp(-((x1 - 4) ** 2 + (x2 - 4) ** 2 + (x3 - 3) ** 2));
}
function loadDemo(silent = false) {
  state.params = [
    { name: 'x1', min: 0, max: 5, type: 'continuous' },
    { name: 'x2', min: 0, max: 5, type: 'continuous' },
    { name: 'x3', min: 0, max: 5, type: 'continuous' }
  ];
  // 6 个初始采样点 (含 2 个靠近峰值的点提供信号, 其余分散用于探索)
  const pts = [
    [0.3, 2.5, 4.2],
    [4.7, 0.5, 2.0],
    [2.5, 4.5, 0.3],
    [1.5, 1.5, 0.5],
    [3.5, 4.0, 2.5],
    [0.8, 0.5, 2.0]
  ];
  state.data = pts.map(([a, b, c]) => ({
    x: [a, b, c],
    y: +demoFunc(a, b, c).toFixed(4)
  }));
  document.getElementById('optGoal').value = 'max';
  renderParams(); renderTable(); clearResults();
  if (!silent) toast(t('demoLoaded'), 'success');
}

/* =========================================================================
 *  UI 工具
 * ========================================================================= */
function toast(msg, type = 'info') {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.className = 'toast show ' + (type === 'error' ? 'error' : type === 'success' ? 'success' : '');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.remove('show'), 2200);
}
function showToast(msg, type) { toast(msg, type); }
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
}

/* =========================================================================
 *  初始化
 * ========================================================================= */
loadDemo(true);
applyI18n();
applyTheme();
// 窗口大小变化时重绘可视化 (防抖)
let _resizeTimer = null;
window.addEventListener('resize', () => {
  clearTimeout(_resizeTimer);
  _resizeTimer = setTimeout(() => { if (state.gp) renderViz(); }, 200);
});
