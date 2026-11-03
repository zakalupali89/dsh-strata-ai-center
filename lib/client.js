/* eslint-disable */
// dsh-strata-ai-center — client side (DSH Web Client, __ModuleLoader__ 闭包工厂)
// 面板数据全部来自插件 host 端 /__dsh-strata-ai-center/status, 其数值取自本机 Strata
// 引擎的真实端点 (/health /v1/status /v1/telemetry /metrics) 与真实文件, Нет演示数据.
(function () {
  var PKG_ID = 'dsh-strata-ai-center';
  var PANEL_ID = 'strata-ai-center';
  var API_BASE = '/__dsh-strata-ai-center';

  function createPlugin(requireFn) {
    var React = requireFn('react');
    var h = React.createElement;
    var useState = React.useState;
    var useEffect = React.useEffect;
    var useRef = React.useRef;
    var useMemo = React.useMemo;

    var STYLE_ID = 'dsh-strata-ai-center-styles';
    var CSS_TEXT = [
      '[data-plugin="dsh-strata-ai-center"].sac-sidebar-icon { display: inline-flex; align-items: center; justify-content: center; width: 16px; height: 16px; color: inherit; position: relative; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-status-dot { position: absolute; right: -2px; bottom: -2px; width: 6px; height: 6px; border-radius: 50%; background: #10b981; box-shadow: 0 0 0 1.5px #ffffff; }',
      '[data-plugin="dsh-strata-ai-center"].sac-root { box-sizing: border-box; height: 100%; width: 100%; overflow-y: auto; padding: calc(var(--dsh-frame-top-clearance, 24px) + 8px) 28px 36px 28px; background: #f8fafc; color: #0f172a; font-family: var(--dsh-font-family-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Microsoft YaHei", sans-serif); font-size: 13px; line-height: 1.5; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-container { max-width: 1180px; margin: 0 auto; display: flex; flex-direction: column; gap: 20px; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-header { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px; padding-bottom: 16px; border-bottom: 1px solid #e2e8f0; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-title-row { display: flex; align-items: center; gap: 12px; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-brand-badge { width: 36px; height: 36px; border-radius: 10px; background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%); display: flex; align-items: center; justify-content: center; color: #ffffff; font-weight: 700; box-shadow: 0 4px 12px rgba(37,99,235,0.22); }',
      '[data-plugin="dsh-strata-ai-center"] .sac-title { font-size: 18px; font-weight: 600; margin: 0; display: flex; align-items: center; gap: 10px; color: #0f172a; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-subtitle { font-size: 12px; color: #64748b; margin-top: 2px; word-break: break-all; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-pill { display: inline-flex; align-items: center; gap: 6px; padding: 3px 10px; border-radius: 999px; font-size: 11.5px; font-weight: 500; border: 1px solid #cbd5e1; background: #f1f5f9; color: #475569; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-pill.online { color: #047857; border-color: #a7f3d0; background: #ecfdf5; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-pill.stopped { color: #64748b; border-color: #e2e8f0; background: #f1f5f9; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-pill.warning { color: #b45309; border-color: #fde68a; background: #fffbeb; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-pill.danger { color: #b91c1c; border-color: #fecaca; background: #fef2f2; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-tabs { display: inline-flex; background: #eef2f6; padding: 4px; border-radius: 10px; border: 1px solid #e2e8f0; gap: 4px; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-tab-btn { border: none; background: transparent; color: #475569; padding: 6px 16px; border-radius: 7px; font-size: 13px; font-weight: 500; cursor: pointer; display: inline-flex; align-items: center; gap: 7px; transition: all 0.15s ease; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-tab-btn:hover { color: #0f172a; background: rgba(255,255,255,0.65); }',
      '[data-plugin="dsh-strata-ai-center"] .sac-tab-btn.active { background: #ffffff; color: #2563eb; font-weight: 600; box-shadow: 0 1px 3px rgba(15,23,42,0.08); }',
      '[data-plugin="dsh-strata-ai-center"] .sac-actions { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-btn { border: 1px solid #cbd5e1; background: #ffffff; color: #1e293b; padding: 7px 14px; border-radius: 8px; font-size: 12.5px; font-weight: 500; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; transition: all 0.15s ease; box-shadow: 0 1px 2px rgba(15,23,42,0.04); }',
      '[data-plugin="dsh-strata-ai-center"] .sac-btn:hover:not(:disabled) { border-color: #94a3b8; background: #f8fafc; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-btn:disabled { opacity: 0.5; cursor: not-allowed; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-btn.primary { background: #2563eb; border-color: #2563eb; color: #ffffff; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-btn.primary:hover:not(:disabled) { background: #1d4ed8; border-color: #1d4ed8; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-btn.success { background: #059669; border-color: #059669; color: #ffffff; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-btn.success:hover:not(:disabled) { background: #047857; border-color: #047857; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-btn.danger { background: #fef2f2; border-color: #fecaca; color: #dc2626; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-btn.danger:hover:not(:disabled) { background: #fee2e2; border-color: #fca5a5; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-grid-4 { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 14px; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-grid-2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(380px, 1fr)); gap: 16px; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-models-layout { display: grid; grid-template-columns: 1.15fr 1fr; gap: 18px; align-items: start; }',
      '@media (max-width: 960px) { [data-plugin="dsh-strata-ai-center"] .sac-models-layout { grid-template-columns: 1fr; } }',
      '[data-plugin="dsh-strata-ai-center"] .sac-card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px 18px; display: flex; flex-direction: column; gap: 12px; box-shadow: 0 1px 3px rgba(15,23,42,0.04); }',
      '[data-plugin="dsh-strata-ai-center"] .sac-card-header { display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-card-title { font-size: 13.5px; font-weight: 600; color: #0f172a; margin: 0; display: flex; align-items: center; gap: 8px; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-metric-big { font-size: 24px; font-weight: 700; color: #0f172a; letter-spacing: -0.3px; font-variant-numeric: tabular-nums; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-metric-unit { font-size: 12px; font-weight: 400; color: #64748b; margin-left: 4px; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-progress-track { width: 100%; height: 8px; border-radius: 999px; background: #e2e8f0; overflow: hidden; position: relative; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-progress-fill { height: 100%; border-radius: 999px; transition: width 0.25s ease; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-kv-row { display: flex; align-items: center; justify-content: space-between; font-size: 12px; color: #64748b; gap: 10px; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-kv-val { color: #1e293b; font-weight: 500; font-variant-numeric: tabular-nums; text-align: right; word-break: break-all; }',
      '[data-plugin="dsh-strata-ai-center"] code.sac-kv-val { background: #f1f5f9; padding: 2px 6px; border-radius: 5px; border: 1px solid #e2e8f0; color: #0f172a; font-size: 11.5px; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-tier-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }',
      '@media (max-width: 820px) { [data-plugin="dsh-strata-ai-center"] .sac-tier-grid { grid-template-columns: repeat(2, 1fr); } }',
      '[data-plugin="dsh-strata-ai-center"] .sac-tier-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px; display: flex; flex-direction: column; gap: 6px; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-family-title { font-size: 12px; font-weight: 600; color: #2563eb; margin: 8px 0 0 0; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-model-list { display: flex; flex-direction: column; gap: 10px; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-model-item { border: 1px solid #e2e8f0; background: #f8fafc; border-radius: 10px; padding: 12px 14px; cursor: pointer; transition: all 0.15s ease; display: flex; flex-direction: column; gap: 6px; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-model-item:hover { border-color: #93c5fd; background: #f0f7ff; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-model-item.selected { border-color: #2563eb; background: #eff6ff; box-shadow: 0 0 0 1px rgba(37,99,235,0.25); }',
      '[data-plugin="dsh-strata-ai-center"] .sac-model-item.unlaunchable { opacity: 0.75; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }',
      '@media (max-width: 700px) { [data-plugin="dsh-strata-ai-center"] .sac-form-grid { grid-template-columns: 1fr; } }',
      '[data-plugin="dsh-strata-ai-center"] .sac-field { display: flex; flex-direction: column; gap: 5px; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-field.full { grid-column: 1 / -1; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-label { font-size: 12px; font-weight: 500; color: #475569; display: flex; justify-content: space-between; gap: 8px; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-input, [data-plugin="dsh-strata-ai-center"] .sac-select { background: #ffffff; border: 1px solid #cbd5e1; border-radius: 7px; padding: 7px 10px; color: #0f172a; font-size: 12.5px; outline: none; width: 100%; box-sizing: border-box; transition: border-color 0.15s ease, box-shadow 0.15s ease; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-input:focus, [data-plugin="dsh-strata-ai-center"] .sac-select:focus { border-color: #2563eb; box-shadow: 0 0 0 2px rgba(37,99,235,0.12); }',
      '[data-plugin="dsh-strata-ai-center"] .sac-log-box { background: #0f172a; border: 1px solid #1e293b; border-radius: 8px; padding: 10px 12px; font-family: var(--dsh-font-family-code, Consolas, "JetBrains Mono", monospace); font-size: 11.5px; color: #cbd5e1; max-height: 240px; overflow-y: auto; white-space: pre-wrap; word-break: break-all; line-height: 1.45; }',
      '[data-plugin="dsh-strata-ai-center"] .sac-toast { padding: 9px 14px; border-radius: 8px; background: #eff6ff; border: 1px solid #bfdbfe; color: #1d4ed8; font-size: 12px; display: flex; align-items: center; justify-content: space-between; gap: 10px; }'
    ].join('\n');

    function ensureStyles() {
      if (typeof document === 'undefined') return;
      var styleEl = document.getElementById(STYLE_ID);
      if (!styleEl) {
        styleEl = document.createElement('style');
        styleEl.id = STYLE_ID;
        document.head.appendChild(styleEl);
      }
      if (styleEl.textContent !== CSS_TEXT) {
        styleEl.textContent = CSS_TEXT;
      }
    }

    // 将「AI Центр управления」固定在左侧栏「Memory System」正下方
    // v2.5.7⑤：全局 body 观察器只作兜底（防抖 400ms, 避免聊天流式 DOM 高频触发整页查询）; 
    // 侧栏列表容器一旦定位到就挂专用观察器, 只盯那个列表, 顺序维护即时且廉价
    var pinDebounceTimer = null;
    function schedulePin(delayMs) {
      if (pinDebounceTimer) return;
      pinDebounceTimer = setTimeout(function () {
        pinDebounceTimer = null;
        pinBelowMemorySystemInSidebar();
      }, delayMs == null ? 400 : delayMs);
    }

    function pinBelowMemorySystemInSidebar() {
      if (typeof document === 'undefined') return;
      try {
        var buttons = Array.from(document.querySelectorAll('button, [role="button"], [data-dsh-part="sidebar-entry"]'));
        var memoryBtn = null;
        var ourBtn = null;
        for (var i = 0; i < buttons.length; i++) {
          var btn = buttons[i];
          var txt = (btn.textContent || btn.getAttribute('aria-label') || '').trim();
          if (txt.indexOf('记忆系统') !== -1 || txt.indexOf('Memory System') !== -1 || txt.indexOf('Система памяти') !== -1) {
            memoryBtn = btn;
          }
          if (txt.indexOf('AI память') !== -1 || txt.indexOf('AI Центр') !== -1 || txt.indexOf('AI中心管理中心') !== -1 || txt.indexOf('AI Management Center') !== -1) {
            ourBtn = btn;
          }
        }
        if (memoryBtn && ourBtn && memoryBtn.parentElement && memoryBtn.parentElement === ourBtn.parentElement) {
          if (memoryBtn.nextElementSibling !== ourBtn) {
            memoryBtn.parentElement.insertBefore(ourBtn, memoryBtn.nextElementSibling);
          }
          if (typeof MutationObserver !== 'undefined' && !pinBelowMemorySystemInSidebar.sidebarObs && memoryBtn.parentElement.isConnected) {
            pinBelowMemorySystemInSidebar.sidebarObs = new MutationObserver(function () {
              pinBelowMemorySystemInSidebar();
            });
            pinBelowMemorySystemInSidebar.sidebarObs.observe(memoryBtn.parentElement, { childList: true });
          }
        }
      } catch (_e) {}
    }

    function SidebarEntryIcon() {
      useEffect(function () {
        ensureStyles();
        var timer = setTimeout(pinBelowMemorySystemInSidebar, 120);
        return function () {
          clearTimeout(timer);
        };
      }, []);

      return h(
        'span',
        { className: 'sac-sidebar-icon', 'data-plugin': PKG_ID, title: 'AI Центр управления (Strata)' },
        h(
          'svg',
          { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' },
          h('rect', { x: 4, y: 4, width: 16, height: 16, rx: 3 }),
          h('rect', { x: 9, y: 9, width: 6, height: 6, rx: 1 }),
          h('path', { d: 'M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3' })
        )
      );
    }

    function SparklineChart(props) {
      var data = props.data || [];
      var color = props.color || '#2563eb';
      var maxVal = props.max || 100;
      if (data.length < 2) {
        return h('div', { style: { height: 46, fontSize: 11.5, color: '#94a3b8', display: 'flex', alignItems: 'center' } }, 'Нет замеров (движок простаивает или не запущен)');
      }
      var width = 260;
      var height = 46;
      var pts = data
        .map(function (v, idx) {
          var x = (idx / Math.max(1, data.length - 1)) * width;
          var y = height - Math.min(height - 4, Math.max(4, (v / maxVal) * (height - 8)));
          return x.toFixed(1) + ',' + y.toFixed(1);
        })
        .join(' ');
      return h(
        'svg',
        { width: '100%', height: height, viewBox: '0 0 ' + width + ' ' + height, preserveAspectRatio: 'none' },
        h('polyline', { fill: 'none', stroke: color, strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', points: pts })
      );
    }

    function fmtUptime(s) {
      if (s == null) return '—';
      var h_ = Math.floor(s / 3600);
      var m = Math.floor((s % 3600) / 60);
      return (h_ > 0 ? h_ + ' ч ' : '') + m + ' мин';
    }

    function StrataAiCenterPanel(props) {
      var _tab = useState('monitor');
      var activeTab = _tab[0];
      var setActiveTab = _tab[1];

      var _status = useState(null);
      var status = _status[0];
      var setStatus = _status[1];

      var _form = useState(null);
      var form = _form[0];
      var setForm = _form[1];

      var _busy = useState(false);
      var busy = _busy[0];
      var setBusy = _busy[1];

      var _toast = useState('');
      var toast = _toast[0];
      var setToast = _toast[1];

      var _tokHistory = useState([]);
      var tokHistory = _tokHistory[0];
      var setTokHistory = _tokHistory[1];

      var _updReport = useState(null);
      var updReport = _updReport[0];
      var setUpdReport = _updReport[1];

      var _updChecking = useState(false);
      var updChecking = _updChecking[0];
      var setUpdChecking = _updChecking[1];

      var _updStatus = useState(null);
      var updStatus = _updStatus[0];
      var setUpdStatus = _updStatus[1];

      var _updRunning = useState(false);
      var updRunning = _updRunning[0];
      var setUpdRunning = _updRunning[1];

      var _updForce = useState(false);
      var updForce = _updForce[0];
      var setUpdForce = _updForce[1];

      var _newEnvKey = useState('');
      var newEnvKey = _newEnvKey[0];
      var setNewEnvKey = _newEnvKey[1];
      var _newEnvValue = useState('');
      var newEnvValue = _newEnvValue[0];
      var setNewEnvValue = _newEnvValue[1];

      // 模型目录：「全部模型」折叠开关（По умолчанию只显示Установлено）
      var _modelsOpen = useState(false);
      var modelsOpen = _modelsOpen[0];
      var setModelsOpen = _modelsOpen[1];

      var formInitializedRef = useRef(false);
      var lastInstallStateRef = useRef(null);
      var lastTokRef = useRef(null);

      function showNotice(msg) {
        setToast(msg);
        setTimeout(function () {
          setToast(function (cur) {
            return cur === msg ? '' : cur;
          });
        }, 6000);
      }

      function fetchStatus() {
        fetch(API_BASE + '/status')
          .then(function (r) {
            return r.json();
          })
          .then(function (data) {
            if (data && data.ok) {
              setStatus(data);
              // 模型下载安装任务的完成/失败提醒（对比上一轮轮询状态）
              var mi = data.modelInstall;
              var prevMi = lastInstallStateRef.current;
              lastInstallStateRef.current = mi;
              if (prevMi && prevMi.running && mi && !mi.running) {
                showNotice(
                  mi.ok
                    ? '✅ ' + mi.label + ' — загрузка/установка завершена, модель готова'
                    : '❌ ' + mi.label + ' — загрузка/установка не завершена (код выхода ' + mi.exitCode + (mi.error ? ', ' + mi.error : '') + '); setup поддерживает докачку — нажмите ещё раз, чтобы продолжить'
                );
              }
              if (!formInitializedRef.current && data.settings) {
                formInitializedRef.current = true;
                setForm(data.settings);
              }
              // 只有拿到真实速度时才记录采样点
              var tok = data.engine && data.engine.decodeTokPerSec;
              if (typeof tok === 'number' && tok > 0 && tok !== lastTokRef.current) {
                lastTokRef.current = tok;
                setTokHistory(function (prev) {
                  return prev.slice(-19).concat([+tok.toFixed(1)]);
                });
              }
            }
          })
          .catch(function () {});
      }

      useEffect(function () {
        ensureStyles();
        pinBelowMemorySystemInSidebar();
        fetchStatus();
        var interval = setInterval(function () {
          if (typeof document === 'undefined' || document.visibilityState !== 'hidden') fetchStatus();
        }, 2500);
        return function () {
          clearInterval(interval);
        };
      }, []);

      function fetchUpdateStatus() {
        fetch(API_BASE + '/update/status')
          .then(function (r) {
            return r.json();
          })
          .then(function (data) {
            if (data && data.ok) {
              setUpdStatus(data);
              setUpdRunning(Boolean(data.running));
            }
          })
          .catch(function () {});
      }

      // 升级页打开或后台升级进行中时, 轮询升级Статус задачи
      useEffect(
        function () {
          if (activeTab !== 'update' && !updRunning) return;
          fetchUpdateStatus();
          var interval = setInterval(function () {
            if (typeof document === 'undefined' || document.visibilityState !== 'hidden') fetchUpdateStatus();
          }, 3000);
          return function () {
            clearInterval(interval);
          };
        },
        [activeTab, updRunning]
      );

      function updateField(key, value) {
        setForm(function (prev) {
          var next = Object.assign({}, prev || {}, {});
          next[key] = value;
          return next;
        });
      }

      // 引擎Переменная окружения (STRATA_*) 的编辑：值留空保存时由 host 端删除该变量
      function setEnvEntry(key, value) {
        var env = Object.assign({}, activeSettings.engineEnv || {});
        env[key] = value;
        updateField('engineEnv', env);
      }
      function removeEnvEntry(key) {
        var env = Object.assign({}, activeSettings.engineEnv || {});
        delete env[key];
        updateField('engineEnv', env);
      }
      function addEnvEntryFromInputs() {
        var k = (newEnvKey || '').trim();
        var v = (newEnvValue || '').trim();
        if (!k) {
          showNotice('Введите имя переменной, напр. STRATA_ROUTE_TAIL_SKIP');
          return;
        }
        setEnvEntry(k, v);
        setNewEnvKey('');
        setNewEnvValue('');
      }

      function postJson(path, body) {
        return fetch(API_BASE + path, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body || {})
        }).then(function (r) {
          return r.json();
        });
      }

      function handleSaveSettings() {
        if (!form) return;
        setBusy(true);
        postJson('/settings', form)
          .then(function (resp) {
            setBusy(false);
            showNotice(resp.message || 'Параметры сохранены');
            fetchStatus();
          })
          .catch(function (err) {
            setBusy(false);
            showNotice('Ошибка сохранения: ' + err.message);
          });
      }

      function handleStartEngine() {
        if (!form) return;
        var onlineNow = Boolean(status && status.engine && status.engine.online);
        setBusy(true);
        showNotice(onlineNow ? 'Перезапуск движка Strata с новыми параметрами (--restart)...' : 'Запуск движка через strata launch...');
        postJson('/engine/start', form)
          .then(function (resp) {
            setBusy(false);
            if (resp && resp.ok) {
              showNotice('Выполнено: ' + (resp.command || resp.launchedMode) + '(загрузка занимает десятки секунд — смотрите прогресс в области логов)');
            } else {
              showNotice('Ошибка запуска: ' + ((resp && resp.error) || 'Неизвестная ошибка'));
            }
            setTimeout(fetchStatus, 1500);
          })
          .catch(function (err) {
            setBusy(false);
            showNotice('Ошибка запроса: ' + err.message);
          });
      }

      function handleStopEngine() {
        setBusy(true);
        showNotice('Остановка службы (strata launch --stop) — модель будет выгружена, память GPU освобождена...');
        postJson('/engine/stop', {})
          .then(function (resp) {
            setBusy(false);
            if (resp && resp.ok) {
              showNotice('Команда остановки выполнена');
            } else {
              showNotice('Ошибка остановки: ' + ((resp && resp.error) || '').slice(0, 160));
            }
            setTimeout(fetchStatus, 1500);
          })
          .catch(function (err) {
            setBusy(false);
            showNotice('Ошибка запроса: ' + err.message);
          });
      }

      function handleUnload() {
        setBusy(true);
        showNotice('Отправка /unload движку (освобождение VRAM между запросами)...');
        postJson('/engine/unload', {})
          .then(function (resp) {
            setBusy(false);
            showNotice(resp && resp.ok ? 'Модель выгружена, память GPU освобождена (автоперезагрузка при следующем запросе)' : 'Выгрузка не завершена: ' + ((resp && resp.error) || ''));
            fetchStatus();
          })
          .catch(function (err) {
            setBusy(false);
            showNotice('Ошибка запроса: ' + err.message);
          });
      }

      function handleLaunchStatus() {
        setBusy(true);
        fetch(API_BASE + '/launch-status')
          .then(function (r) {
            return r.json();
          })
          .then(function (resp) {
            setBusy(false);
            var running = resp && resp.data && resp.data.running;
            if (running && running.length > 0) {
              var r0 = running[0];
              showNotice('экземпляр launch: ' + r0.name + ' · ' + r0.state + ' · ' + r0.url + ' · конфиг ' + (r0.config || ''));
            } else {
              showNotice('strata launch сообщает: запущенных экземпляров нет');
            }
          })
          .catch(function (err) {
            setBusy(false);
            showNotice('Ошибка запроса: ' + err.message);
          });
      }

      function handleCopyDiagnose() {
        showNotice('Формирование диагностики...');
        fetch(API_BASE + '/diagnose')
          .then(function (r) {
            return r.json();
          })
          .then(function (data) {
            var text = JSON.stringify(data, null, 2);
            var done = function () {
              showNotice('Диагностика скопирована (' + text.length + ' симв.), можно вставить в сообщение обслуживающему');
            };
            if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
              navigator.clipboard.writeText(text).then(done, function () {
                showNotice('Ошибка копирования: ' + text.slice(0, 300));
              });
            } else {
              showNotice('Буфер обмена недоступен: ' + text.slice(0, 300));
            }
          })
          .catch(function (err) {
            showNotice('Ошибка запроса диагностики: ' + err.message);
          });
      }

      function handleOpenWeb() {
        postJson('/web/open', {})
          .then(function (resp) {
            showNotice(resp && resp.ok ? 'Открыто в браузере ' + resp.url : 'Ошибка открытия: ' + ((resp && resp.error) || ''));
          })
          .catch(function (err) {
            showNotice('Ошибка запроса: ' + err.message);
          });
      }

      function handleRunBenchmark() {
        setBusy(true);
        showNotice('Отправка бенчмарк-запроса на 64 токена локальному движку...');
        postJson('/benchmark', {})
          .then(function (resp) {
            setBusy(false);
            if (resp && resp.ok) {
              showNotice(
                'Замер скорости: декодирование ' + resp.tokPerSec + ' tok/s' +
                  (resp.prefillTokPerSec ? ' · префилл ' + resp.prefillTokPerSec + ' tok/s' : '') +
                  ' · ' + resp.completionTokens + ' tokens / ' + resp.elapsedSec + 's'
              );
              fetchStatus();
            } else {
              showNotice('Ошибка замера: ' + ((resp && resp.error) || 'Неизвестная ошибка'));
            }
          })
          .catch(function (err) {
            setBusy(false);
            showNotice('Ошибка запроса: ' + err.message);
          });
      }

      function handleUpdateCheck() {
        setUpdChecking(true);
        setUpdReport(null);
        showNotice('Чтение подписанного источника обновлений (strata update --check), в первый раз нужен интернет ~10-60 c...');
        fetch(API_BASE + '/update/check')
          .then(function (r) {
            return r.json();
          })
          .then(function (resp) {
            setUpdChecking(false);
            setUpdReport(resp);
            if (resp && resp.ok && resp.report) {
              var eng = resp.report.engine || {};
              showNotice(
                'Проверка завершена: движок ' + (eng.status === 'current' ? 'уже актуален (' + ((eng.installed || {}).version || '?') + ')' : eng.status === 'available' ? 'доступно обновление ' + ((eng.installed || {}).version || '?') + ' → ' + ((eng.offered || {}).version || '?') : eng.status) +
                  ' · Control ' + ((resp.report.control || {}).status || '?')
              );
            } else {
              showNotice('Ошибка проверки: ' + ((resp && (resp.error || resp.raw)) || 'Неизвестная ошибка').toString().slice(0, 200));
            }
          })
          .catch(function (err) {
            setUpdChecking(false);
            showNotice('Ошибка запроса: ' + err.message);
          });
      }

      function handleUpdateApply() {
        if (updRunning) return;
        var okGo = typeof window !== 'undefined' && typeof window.confirm === 'function'
          ? window.confirm('Будет выполнен strata update: сначала остановится работающий движок, затем из подписанного источника скачаются и проверятся компоненты; переключение произойдёт только после успешного тестового запуска (старая версия сохраняется, возможен откат). Процесс может занять несколько минут. Продолжить?')
          : true;
        if (!okGo) return;
        setBusy(true);
        postJson('/update/apply', { stopFirst: true, force: updForce, feed: activeSettings.updateFeed })
          .then(function (resp) {
            setBusy(false);
            if (resp && resp.ok) {
              setUpdRunning(true);
              showNotice('Задача обновления запущена (pid ' + resp.pid + '), прогресс — в логах ниже; после завершения перезапустите движок кнопкой «Запустить модель».');
              fetchUpdateStatus();
            } else {
              showNotice('Ошибка запуска обновления: ' + ((resp && resp.error) || 'Неизвестная ошибка'));
            }
          })
          .catch(function (err) {
            setBusy(false);
            showNotice('Ошибка запроса: ' + err.message);
          });
      }

      function handleUpdateRollback() {
        if (updRunning) return;
        var okGo = typeof window !== 'undefined' && typeof window.confirm === 'function'
          ? window.confirm('Будет выполнен strata components rollback: остановка службы и возврат к последней сохранённой при обновлении версии движка. Продолжить?')
          : true;
        if (!okGo) return;
        setBusy(true);
        postJson('/update/rollback', { stopFirst: true })
          .then(function (resp) {
            setBusy(false);
            if (resp && resp.ok) {
              setUpdRunning(true);
              showNotice('Задача отката запущена, прогресс — в логах ниже.');
              fetchUpdateStatus();
            } else {
              showNotice('Невозможно откатить: ' + ((resp && resp.error) || 'Неизвестная ошибка'));
            }
          })
          .catch(function (err) {
            setBusy(false);
            showNotice('Ошибка запроса: ' + err.message);
          });
      }

      var engine = (status && status.engine) || {};
      var hw = (status && status.hardware) || { ram: { totalGb: 0, usedGb: 0 }, gpus: [], cpuCores: 0, cpuModel: '' };
      var installation = (status && status.installation) || {};
      var catalog = (status && status.catalog) || [];
      var activeSettings = form || (status && status.settings) || {};

      // ---- 监控页 ----
      function renderMonitorTab() {
        var gpu0 = (hw.gpus && hw.gpus[0]) || null;
        var ram = hw.ram || { totalGb: 0, usedGb: 0 };
        var ramPct = ram.totalGb > 0 ? Math.min(100, Math.round((ram.usedGb / ram.totalGb) * 100)) : 0;
        var vramPct = gpu0 && gpu0.vramTotalGb > 0 ? Math.min(100, Math.round((gpu0.vramUsedGb / gpu0.vramTotalGb) * 100)) : 0;
        var expertSlots = engine.expertSlots;
        var cachePct = expertSlots != null ? Math.min(100, Math.round((expertSlots / (engine.totalExperts || 24576)) * 100)) : 0;
        var selRunConfig = (installation.runConfigs || []).filter(function (r) {
          return r.modelId === (activeSettings.selectedModel || '');
        })[0];

        return h(
          React.Fragment,
          null,
          h(
            'div',
            { className: 'sac-grid-4' },
            // 1. 生成与预填充速度（来自最近一次请求的 timings / 实时速率）
            h(
              'div',
              { className: 'sac-card' },
              h(
                'div',
                { className: 'sac-card-header' },
                h('h3', { className: 'sac-card-title' }, '⚡ Скорость генерации ответов и чтения промпта'),
                h('span', { className: 'sac-pill ' + (engine.online ? 'online' : 'stopped') }, engine.online ? 'Замеренное' : 'Движок не запущен')
              ),
              h(
                'div',
                null,
                h('span', { className: 'sac-metric-big' }, engine.decodeTokPerSec != null ? engine.decodeTokPerSec : '—', h('span', { className: 'sac-metric-unit' }, 'tokens/s (декодирование)'))
              ),
              h(SparklineChart, { data: tokHistory, color: '#2563eb', max: 130 }),
              h('div', { className: 'sac-kv-row' }, h('span', null, 'Чтение промпта (Prefill)'), h('span', { className: 'sac-kv-val' }, engine.prefillTokPerSec != null ? engine.prefillTokPerSec + ' tokens/s' : '—')),
              h(
                'div',
                { className: 'sac-kv-row' },
                h('span', null, 'Доля принятых MTP-токенов (спекулятивное семплирование)'),
                h('span', { className: 'sac-kv-val' }, engine.mtpAcceptRate != null ? Math.round(engine.mtpAcceptRate * 100) + '% (' + engine.mtpDraftAccepted + '/' + engine.mtpDraftN + ')' : '—')
              )
            ),

            // 2. 显卡状态（/v1/telemetry devices 实测）
            h(
              'div',
              { className: 'sac-card' },
              h(
                'div',
                { className: 'sac-card-header' },
                h('h3', { className: 'sac-card-title' }, '🎮 Состояние видеокарты (GPU 0)'),
                gpu0 ? h('span', { className: 'sac-pill online' }, gpu0.tempC + '°C · ' + gpu0.powerW + 'W') : h('span', { className: 'sac-pill stopped' }, 'Не обнаружено')
              ),
              h('div', null, h('span', { className: 'sac-metric-big' }, gpu0 ? gpu0.vramUsedGb + ' / ' + gpu0.vramTotalGb : '—', h('span', { className: 'sac-metric-unit' }, 'GB VRAM'))),
              h('div', { className: 'sac-progress-track' }, h('div', { className: 'sac-progress-fill', style: { width: vramPct + '%', background: 'linear-gradient(90deg, #2563eb, #6366f1)' } })),
              h('div', { className: 'sac-kv-row' }, h('span', null, gpu0 ? gpu0.name : 'nvidia-smi / телеметрия недоступны'), h('span', { className: 'sac-kv-val' }, gpu0 ? 'Нагрузка ядра ' + gpu0.loadPercent + '%' : '')),
              h('div', { className: 'sac-kv-row' }, h('span', null, 'Свободная память GPU движка'), h('span', { className: 'sac-kv-val' }, engine.vramFreeMib != null ? Math.round(engine.vramFreeMib / 1024 * 10) / 10 + ' GB' : '—'))
            ),

            // 3. 系统内存与Процессор
            h(
              'div',
              { className: 'sac-card' },
              h(
                'div',
                { className: 'sac-card-header' },
                h('h3', { className: 'sac-card-title' }, '🧠 Системная память и процессор (RAM / CPU)'),
                h('span', { className: 'sac-pill' }, (hw.cpuCores || 0) + ' логических ядер')
              ),
              h('div', null, h('span', { className: 'sac-metric-big' }, ram.usedGb + ' / ' + ram.totalGb, h('span', { className: 'sac-metric-unit' }, 'GB памяти'))),
              h('div', { className: 'sac-progress-track' }, h('div', { className: 'sac-progress-fill', style: { width: ramPct + '%', background: 'linear-gradient(90deg, #10b981, #059669)' } })),
              h('div', { className: 'sac-kv-row' }, h('span', null, 'Доступная свободная память'), h('span', { className: 'sac-kv-val' }, (ram.totalGb ? Math.round((ram.totalGb - ram.usedGb) * 10) / 10 : '—') + ' GB')),
              h('div', { className: 'sac-kv-row' }, h('span', null, 'Процессор'), h('span', { className: 'sac-kv-val', style: { maxWidth: '170px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }, hw.cpuModel || '—'))
            ),

            // 4. 专家缓存与上下文（/metrics engine 块实测）
            h(
              'div',
              { className: 'sac-card' },
              h(
                'div',
                { className: 'sac-card-header' },
                h('h3', { className: 'sac-card-title' }, '📚 Кэш экспертов и контекст (MoE Cache)'),
                h('span', { className: 'sac-pill warning' }, 'Всего экспертов 24 576 (48 слоёв × 512)')
              ),
              h('div', null, h('span', { className: 'sac-metric-big' }, expertSlots != null ? expertSlots.toLocaleString() : '—', h('span', { className: 'sac-metric-unit' }, 'экспертных слотов постоянно в VRAM'))),
              h('div', { className: 'sac-progress-track' }, h('div', { className: 'sac-progress-fill', style: { width: cachePct + '%', background: 'linear-gradient(90deg, #f59e0b, #ea580c)' } })),
              h('div', { className: 'sac-kv-row' }, h('span', null, 'Занято кэшем экспертов'), h('span', { className: 'sac-kv-val' }, engine.expertCacheMib != null ? (Math.round(engine.expertCacheMib / 102.4) / 10) + ' GB' : '—')),
              h(
                'div',
                { className: 'sac-kv-row' },
                h('span', null, 'Контекст / формат KV / постоянно в памяти'),
                h('span', { className: 'sac-kv-val' }, (engine.context ? Math.round(engine.context / 1024) + 'K' : '—') + ' · ' + String(engine.kv || activeSettings.kvFormat || '—').toUpperCase() + (engine.kvResident ? ' · постоянно в памяти ' + Math.round(engine.kvResident / 1024) + 'K' : ''))
              )
            )
          ),

          // 四级分层状态（数字取自 /metrics）
          h(
            'div',
            { className: 'sac-card' },
            h(
              'div',
              { className: 'sac-card-header' },
              h('h3', { className: 'sac-card-title' }, '🏗️ Уровни гетерогенного инференса Strata'),
              h('span', { style: { fontSize: '12px', color: '#64748b' } }, 'Движок ' + (engine.version || '—') + ' · запущен ' + fmtUptime(engine.uptimeS) + ' · обслужено запросов ' + (engine.requests != null ? engine.requests : '—'))
            ),
            h(
              'div',
              { className: 'sac-tier-grid' },
              h(
                'div',
                { className: 'sac-tier-box' },
                h('div', { style: { fontWeight: 600, color: '#2563eb' } }, '1. Видеокарта (кэш экспертов в VRAM)'),
                h('div', { style: { fontSize: '12px', color: '#475569' } }, (expertSlots != null ? expertSlots + ' слотов экспертов' : '—') + (engine.expertCacheMib != null ? ', около ' + (Math.round(engine.expertCacheMib / 102.4) / 10) + ' GB' : '') + '; KV постоянно ' + (engine.kvResident ? Math.round(engine.kvResident / 1024) + 'K tokens' : '—') + '.')
              ),
              h(
                'div',
                { className: 'sac-tier-box' },
                h('div', { style: { fontWeight: 600, color: '#059669' } }, '2. Память (пул экспертов в RAM)'),
                h('div', { style: { fontSize: '12px', color: '#475569' } }, 'Вес экспертов, не поместившиеся в VRAM, живут в RAM (сейчас занято ' + ram.usedGb + ' / ' + ram.totalGb + ' GB), горячий обмен с VRAM.')
              ),
              h(
                'div',
                { className: 'sac-tier-box' },
                h('div', { style: { fontWeight: 600, color: '#d97706' } }, '3. Процессор (участие CPU / PCIe)'),
                h('div', { style: { fontSize: '12px', color: '#475569' } }, (engine.poolWorkers ? engine.poolWorkers + ' CPU-потоков' : '—') + ' делят вычисления экспертов, доля PCIe ' + (engine.pcieFrac != null ? engine.pcieFrac : '—') + ', окно MTP-драфта (факт.) ' + (engine.spec || '—') + ' (min-p ' + (engine.specMinP != null ? engine.specMinP : '—') + ').')
              ),
              h(
                'div',
                { className: 'sac-tier-box' },
                h('div', { style: { fontWeight: 600, color: '#7c3aed' } }, '4. SSD (таблица N-gram)'),
                h('div', { style: { fontSize: '12px', color: '#475569' } }, 'Таблица N-gram хранится на SSD и читается по мере надобности, не занимая память (входит в размер загрузки).')
              )
            )
          ),

          // 服务地址与日志
          h(
            'div',
            { className: 'sac-grid-2' },
            h(
              'div',
              { className: 'sac-card' },
              h(
                'div',
                { className: 'sac-card-header' },
                h('h3', { className: 'sac-card-title' }, '🔌 Локальный адрес службы и API'),
                h('button', { className: 'sac-btn', onClick: handleRunBenchmark, disabled: busy }, '⚡ Бенчмарк скорости')
              ),
              h('div', { className: 'sac-kv-row' }, h('span', null, 'Совместимый с OpenAI API (DSH / Codex / Open WebUI)'), h('code', { className: 'sac-kv-val' }, 'http://127.0.0.1:' + (activeSettings.enginePort || 8080) + '/v1')),
              h('div', { className: 'sac-kv-row' }, h('span', null, 'Включённые диалекты (dialects)'), h('code', { className: 'sac-kv-val' }, (engine.dialects || []).join(' · ') || '—')),
              h('div', { className: 'sac-kv-row' }, h('span', null, 'Страница мониторинга API (/api-monitor)'), h('code', { className: 'sac-kv-val' }, activeSettings.apiMonitor ? 'http://127.0.0.1:' + (activeSettings.enginePort || 8080) + '/api-monitor' : 'Выключено (включите api_monitor на странице параметров)')),
              h('div', { className: 'sac-kv-row' }, h('span', null, 'Strata CLI'), h('code', { className: 'sac-kv-val' }, installation.cliPath || '—')),
              h('div', { className: 'sac-kv-row' }, h('span', null, 'Рабочий файл конфигурации'), h('code', { className: 'sac-kv-val' }, selRunConfig ? selRunConfig.path : (installation.runConfigDir || '—') + '\\strata-' + (activeSettings.selectedModel || '') + '.json')),
              h('div', { className: 'sac-kv-row' }, h('span', null, 'пресет launch'), h('span', { className: 'sac-kv-val' }, ((installation.presets || []).map(function (p) { return p.name; }).join(', ')) || 'Нет'))
            ),

            h(
              'div',
              { className: 'sac-card' },
              h(
                'div',
                { className: 'sac-card-header' },
                h('h3', { className: 'sac-card-title' }, '📜 Журнал движка (хвост реального файла)'),
                h(
                  'button',
                  { className: 'sac-btn', onClick: handleLaunchStatus, disabled: busy },
                  '🔎 Состояние launch'
                )
              ),
              h(
                'div',
                { className: 'sac-log-box' },
                (status && status.logs && status.logs.engineLogPath ? '# Журнал движка: ' + status.logs.engineLogPath + '\n' + status.logs.engineLog.join('\n') + '\n\n' : '# Нет журнала движка (%LOCALAPPDATA%\\Strata\\launch\\*.engine.log)\n') +
                  (status && status.logs && status.logs.launchLog && status.logs.launchLog.length ? '# Вывод запуска: ' + status.logs.launchLogPath + '\n' + status.logs.launchLog.join('\n') + '\n\n' : '') +
                  '# Журнал действий плагина\n' +
                  ((status && status.logs && status.logs.actions && status.logs.actions.join('\n')) || '(нет)')
              )
            )
          )
        );
      }

      // ---- 模型页 ----
      function renderModelsTab() {
        var contexts = (status && status.contexts) || [8192, 32768, 65536, 131072, 204800, 262144, 393216, 524288];
        var selected = catalog.filter(function (m) { return m.id === activeSettings.selectedModel; })[0] || null;
        var fit = (selected && selected.fit) || null;
        var kvNow = selected ? selected.kvGb : null;
        var contextLabel = function (c) {
          return c >= 1024 ? Math.round(c / 1024) + 'K (' + c.toLocaleString() + ' tokens)' : c.toLocaleString() + ' tokens';
        };
        var cfgSrc = (status && status.settingsSources && status.settingsSources.runConfigFile) || {};
        var cfgFileName = String(cfgSrc.path || '').split('\\').pop().split('/').pop() || null;
        var srcPill = cfgFileName && cfgSrc.exists
          ? h('span', { className: 'sac-pill online', title: cfgSrc.path }, 'Читается из ' + cfgFileName)
          : h('span', { className: 'sac-pill stopped' }, 'Из снимка плагина (файл конфигурации отсутствует)');

        // 按家族分组
        var families = [];
        (catalog || []).forEach(function (item) {
          var g = families.filter(function (f) { return f.family === item.family; })[0];
          if (!g) {
            g = { family: item.family, familyTitle: item.familyTitle, sizes: [] };
            families.push(g);
          }
          g.sizes.push(item);
        });

        var vramTotalGb = (hw.gpus && hw.gpus[0] && hw.gpus[0].vramTotalGb) || 0;
        var vramEstPct = fit && vramTotalGb > 0 ? Math.min(100, Math.round((fit.vramUseGb / vramTotalGb) * 100)) : 0;
        var ramEstPct = fit && hw.ram && hw.ram.totalGb ? Math.min(100, Math.round((fit.ramUseGb / hw.ram.totalGb) * 100)) : 0;

        return h(
          'div',
          { className: 'sac-models-layout' },
          // 左列：真实模型目录（setup.py 模型表）.По умолчанию只显示Установлено, 其余折叠进「全部模型」
          h(
            'div',
            { className: 'sac-card' },
            h(
              'div',
              { className: 'sac-card-header' },
              h('h3', { className: 'sac-card-title' }, '📦 Каталог моделей (таблица setup.py · установлено ' + catalog.filter(function (m) { return m.installed; }).length + '/' + catalog.length + ')'),
              h('span', { style: { fontSize: 11.5, color: '#64748b' } }, '«Скачать и установить» = режим Control в setup.py (запись в конфигурацию, без запуска службы; поддержка докачки)')
            ),
            // 下载安装任务进度条（进行中时显示）
            (function () {
              var mi = status && status.modelInstall;
              if (!mi || !mi.running) return null;
              var mins = mi.startedAt ? Math.max(1, Math.round((Date.now() - mi.startedAt) / 60000)) : 0;
              var lastLine = String(mi.tail || '').trim().split('\n').filter(Boolean).pop() || '';
              return h(
                'div',
                { style: { margin: '8px 0', padding: '8px 10px', border: '1px solid #bfdbfe', background: '#eff6ff', borderRadius: 8, fontSize: 12, color: '#1e40af', display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' } },
                h('span', { style: { fontWeight: 600 } }, '⬇ ' + mi.label + ' загрузка/установка…(' + mins + ' мин.)'),
                h('span', { style: { flex: 1, minWidth: 120, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: '#3b82f6' }, title: mi.tail || '' }, lastLine),
                h(
                  'button',
                  {
                    className: 'sac-btn',
                    style: { fontSize: 11, padding: '2px 10px' },
                    onClick: function (e) {
                      e.stopPropagation();
                      if (!window.confirm('Отменить текущую задачу загрузки/установки? Скачанные файлы сохранятся, докачка возможна позже.')) return;
                      postJson('/models/install-cancel', {}).then(function (r) {
                        if (!r.ok) showNotice('Ошибка отмены: ' + (r.error || 'Неизвестная ошибка'));
                      }).catch(function () {});
                    }
                  },
                  'Отмена'
                )
              );
            })(),
            families
              .map(function (g) {
                var shown = modelsOpen ? g.sizes : g.sizes.filter(function (s) { return s.installed; });
                return shown.length ? { family: g.family, familyTitle: g.familyTitle, sizes: shown } : null;
              })
              .filter(Boolean)
              .map(function (g) {
                return h(
                  'div',
                  { key: g.family },
                  h('p', { className: 'sac-family-title' }, g.familyTitle),
                  h(
                    'div',
                    { className: 'sac-model-list' },
                    g.sizes.map(function (item) {
                      var isSelected = activeSettings.selectedModel === item.id;
                      var mi = status && status.modelInstall;
                      var isInstalling = mi && mi.running && mi.modelId === item.id;
                      return h(
                        'div',
                        {
                          key: item.id,
                          className: 'sac-model-item' + (isSelected ? ' selected' : '') + (item.launchable ? '' : ' unlaunchable'),
                          onClick: function () {
                            updateField('selectedModel', item.id);
                          }
                        },
                        h(
                          'div',
                          { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px', flexWrap: 'wrap' } },
                          h('div', { style: { fontWeight: 600, fontSize: '13px', color: '#0f172a' } }, item.model),
                          h(
                            'div',
                            { style: { display: 'flex', gap: '6px', alignItems: 'center', flexWrap: 'wrap' } },
                            item.installed
                              ? h('span', { className: 'sac-pill online' }, 'Установлено')
                              : item.launchable
                                ? h(
                                    'button',
                                    {
                                      className: 'sac-btn',
                                      style: { fontSize: 11.5, padding: '3px 10px' },
                                      disabled: isInstalling,
                                      onClick: function (e) {
                                        e.stopPropagation();
                                        if (isInstalling) return;
                                        if (!window.confirm('Начать загрузку и установку ' + item.title + '?\n\nБудет скачано с HuggingFace около ' + item.downloadGb + ' GB (докачка), после завершения автоматически записывается в конфигурацию (без запуска службы).')) return;
                                        postJson('/models/install', { id: item.id }).then(function (r) {
                                          if (r.ok) showNotice('⬇ Начат исход: загрузка и установка ' + r.job.label);
                                          else showNotice('Невозможно начать: ' + (r.error || 'Неизвестная ошибка'));
                                        }).catch(function () { showNotice('Ошибка запроса'); });
                                      }
                                    },
                                    isInstalling ? '⏬ Загрузка/установка…' : '⬇ Скачать и установить (~' + item.downloadGb + ' GB)'
                                  )
                                : h('span', { className: 'sac-pill stopped' }, 'Нужен спец-пакет, установите в терминале'),
                            h('span', { className: 'sac-pill ' + (item.fitLevel === 'fits' ? 'online' : item.fitLevel === 'tight' ? 'warning' : 'danger') }, item.fitText)
                          )
                        ),
                        h('div', { style: { fontSize: 11.5, color: '#64748b' } }, item.about),
                        h(
                          'div',
                          { className: 'sac-kv-row', style: { marginTop: '2px' } },
                          h('span', null, (item.memTotal ? 'Требования к памяти (VRAM+RAM суммарно)' : 'Требования к памяти') + ': ' + item.memoryGb + ' GB' + (item.memTotal ? '' : ' (рекомендуется всего ' + item.ramNeededGb + ' GB)')),
                          h('span', null, '128K ' + String(activeSettings.kvFormat || 'int8').toUpperCase() + ' KV ≈ ' + item.kvGb + ' GB')
                        )
                      );
                    })
                  )
                );
              }),
            (function () {
              var pendingCount = catalog.filter(function (m) { return !m.installed; }).length;
              if (!modelsOpen && catalog.filter(function (m) { return m.installed; }).length === 0) {
                return h('div', { style: { fontSize: 12.5, color: '#64748b', padding: '10px 2px' } }, 'Ещё не установлено ни одной модели — разверните «Все модели» и выберите вариант для загрузки.');
              }
              if (pendingCount === 0) return null;
              return h(
                'button',
                {
                  className: 'sac-btn',
                  style: { marginTop: 10, width: '100%' },
                  onClick: function () { setModelsOpen(!modelsOpen); }
                },
                modelsOpen ? '▲ Свернуть все модели' : '▼ Все модели (' + pendingCount + ' не установлено, нажмите, чтобы развернуть)'
              );
            })()
          ),

          // 右列：本机容量评估 + 参数
          h(
            'div',
            { style: { display: 'flex', flexDirection: 'column', gap: '16px' } },
            // 与运行实例的差异提示（表单值来自 strata-<model>.json; 运行中的引擎可能仍是旧值）
            (function () {
              var sources = (status && status.settingsSources) || {};
              var diffs = (status && status.liveDiffs) || [];
              if (sources.runConfigFile && !sources.runConfigFile.exists) {
                return h(
                  'div',
                  { style: { padding: '9px 12px', borderRadius: 8, background: '#fffbeb', border: '1px solid #fde68a', color: '#92400e', fontSize: 12 } },
                  '⚠ Не найден ' + (sources.runConfigFile.path || 'strata-<model>.json') + ', форма показывает снимок плагина; файл создастся при следующем strata launch.'
                );
              }
              // v2.5.12：跨档案警告——运行实例实际加载的档案(GET /config file) vs 面板管理的档案
              var eng = (status && status.engine) || {};
              var profileWarn = eng.online && eng.configFileMatches === false
                ? h(
                    'div',
                    { style: { padding: '9px 12px', borderRadius: 8, background: '#fef2f2', border: '1px solid #fecaca', color: '#991b1b', fontSize: 12 } },
                    '⚠ Запущенный экземпляр загрузил профиль «' + (eng.configFile || '?') + '», а не управляемый панелью «' + (eng.panelConfigFile || 'strata-<model>.json') + '» — сохранение панели не попадёт в профиль, который реально использует экземпляр. Запуск через панель загрузит её профиль; измените ID модели в панели на имя этого пресета (с v2.5.13 панель может читать/писать этот профиль: форма и сохранение действуют на него, запуск/остановка — по-прежнему через лаунчер Strata), либо отредактируйте тот профиль напрямую.'
                  )
                : null;
              if (diffs.length === 0) return profileWarn;
              var diffBanner = h(
                'div',
                { style: { padding: '9px 12px', borderRadius: 8, background: '#fffbeb', border: '1px solid #fde68a', color: '#92400e', fontSize: 12 } },
                '⚠ Файл конфигурации не совпадает с запущенным экземпляром (форма ниже берёт значения из файла; вступят в силу после перезапуска модели): ' +
                  diffs.map(function (d) {
                    return d.label + ' конфиг ' + d.configured + ' / раб. ' + d.running;
                  }).join('; ')
              );
              if (!profileWarn) return diffBanner;
              return h('div', { style: { display: 'flex', flexDirection: 'column', gap: '8px' } }, profileWarn, diffBanner);
            })(),
            // 本机容量评估（setup.py fitOn 规则实时计算）
            h(
              'div',
              { className: 'sac-card' },
              h(
                'div',
                { className: 'sac-card-header' },
                h('h3', { className: 'sac-card-title' }, '💻 Оценка ёмкости этого ПК (правила fitOn из setup.py)'),
                h('span', { className: 'sac-pill ' + (selected && selected.fitLevel === 'fits' ? 'online' : selected && selected.fitLevel === 'tight' ? 'warning' : 'danger') }, selected ? selected.fitText : '—')
              ),
              fit && fit.known
                ? h(
                    React.Fragment,
                    null,
                    h('div', { className: 'sac-kv-row' }, h('span', null, 'Потребность модели в памяти (memoryGb)'), h('span', { className: 'sac-kv-val' }, fit.memoryGb + ' GB')),
                    h('div', { className: 'sac-kv-row' }, h('span', null, 'Из них в VRAM (vramUse)'), h('span', { className: 'sac-kv-val' }, fit.vramUseGb + ' GB')),
                    h('div', { className: 'sac-progress-track' }, h('div', { className: 'sac-progress-fill', style: { width: vramEstPct + '%', background: '#2563eb' } })),
                    h('div', { className: 'sac-kv-row' }, h('span', null, 'Из них в RAM (ramUse)'), h('span', { className: 'sac-kv-val' }, fit.ramUseGb + ' GB / доступно около ' + (hw.ram && hw.ram.totalGb ? Math.round((hw.ram.totalGb - 10) * 10) / 10 : '—') + ' GB (10 GB отдано системе)')),
                    h('div', { className: 'sac-progress-track' }, h('div', { className: 'sac-progress-fill', style: { width: ramEstPct + '%', background: '#10b981' } })),
                    h('div', { className: 'sac-kv-row' }, h('span', null, 'Вытеснение на SSD (spill)'), h('span', { className: 'sac-kv-val' }, fit.spillGb + ' GB' + (fit.spillGb > 0 ? '(чтение с SSD, медленнее)' : '(нет)'))),
                    h('div', { className: 'sac-kv-row' }, h('span', null, 'Оценка KV для текущего контекста'), h('span', { className: 'sac-kv-val' }, kvNow != null ? kvNow + ' GB (' + String(activeSettings.kvFormat || 'int8').toUpperCase() + ')' : '—'))
                  )
                : h('div', { style: { fontSize: 12, color: '#64748b' } }, 'Не удалось прочитать информацию о RAM/VRAM — оценка невозможна.')
            ),

            // 引擎参数（全部映射到 strata launch 真实旗标）
            h(
              'div',
              { className: 'sac-card' },
              h('div', { className: 'sac-card-header' }, h('h3', { className: 'sac-card-title' }, '⚙️ Параметры движка (флаги strata launch)'), srcPill),
              h(
                'div',
                { className: 'sac-form-grid' },
                h(
                  'div',
                  { className: 'sac-field' },
                  h('label', { className: 'sac-label' }, 'Ёмкость контекста диалога (--context)'),
                  h(
                    'select',
                    {
                      className: 'sac-select',
                      value: String(activeSettings.contextLength || 131072),
                      onChange: function (e) { updateField('contextLength', Number(e.target.value)); }
                    },
                    contexts.map(function (c) {
                      return h('option', { key: c, value: String(c) }, contextLabel(c));
                    })
                  )
                ),
                h(
                  'div',
                  { className: 'sac-field' },
                  h('label', { className: 'sac-label' }, 'Формат KV-кэша (--kv)'),
                  h(
                    'select',
                    {
                      className: 'sac-select',
                      value: activeSettings.kvFormat || 'int8',
                      onChange: function (e) { updateField('kvFormat', e.target.value); }
                    },
                    h('option', { value: 'int8' }, 'int8 (по умолчанию, 8-bit)'),
                    h('option', { value: 'q4_0' }, 'q4_0 (вдвое меньше памяти)'),
                    h('option', { value: 'k8v4' }, 'k8v4 (гибрид 8/4-bit)'),
                    h('option', { value: 'fp16' }, 'fp16 (полная точность)')
                  )
                ),
                h(
                  'div',
                  { className: 'sac-field' },
                  h('label', { className: 'sac-label' }, 'Обработчик изображений (--vision)'),
                  h(
                    'select',
                    {
                      className: 'sac-select',
                      value: activeSettings.visionMode || 'cpu',
                      onChange: function (e) { updateField('visionMode', e.target.value); }
                    },
                    h('option', { value: 'on' }, 'on (автовыбор по правилам движка)'),
                    h('option', { value: 'cpu' }, 'cpu (обработка CPU, экономия VRAM)'),
                    h('option', { value: 'gpu' }, 'gpu (обработка GPU, занимает 1-1.4 GB)'),
                    h('option', { value: 'off' }, 'off (отключить ввод изображений)')
                  )
                ),
                h(
                  'div',
                  { className: 'sac-field' },
                  h('label', { className: 'sac-label' }, 'MTP-спекулятивное декодирование (--mtp)'),
                  h(
                    'select',
                    {
                      className: 'sac-select',
                      value: activeSettings.mtpEnabled === false ? 'off' : 'on',
                      onChange: function (e) { updateField('mtpEnabled', e.target.value === 'on'); }
                    },
                    h('option', { value: 'on' }, 'on (включить draft-слой, быстрее)'),
                    h('option', { value: 'off' }, 'off (экономит ~1 GB VRAM, медленнее)')
                  )
                ),
                h(
                  'div',
                  { className: 'sac-field' },
                  h('label', { className: 'sac-label' }, 'Постоянный размер KV в VRAM (--set kv-resident, 0=адаптивно)'),
                  h('input', {
                    type: 'number', className: 'sac-input', step: 4096, min: 0,
                    value: activeSettings.kvResident ?? 65536,
                    onChange: function (e) { updateField('kvResident', Number(e.target.value)); }
                  })
                ),
                h(
                  'div',
                  { className: 'sac-field' },
                  h('label', { className: 'sac-label' }, 'Резерв VRAM (--set vram-reserve-mib)'),
                  h('input', {
                    type: 'number', className: 'sac-input', step: 64, min: 0,
                    value: activeSettings.vramReserveMib ?? 1280,
                    onChange: function (e) { updateField('vramReserveMib', Number(e.target.value)); }
                  })
                ),
                h(
                  'div',
                  { className: 'sac-field' },
                  h('label', { className: 'sac-label' }, 'Доля участия CPU/PCIe (--set pcie-frac, 0=не задано)'),
                  h('input', {
                    type: 'number', className: 'sac-input', step: 0.05, min: 0, max: 1,
                    value: activeSettings.pcieFrac ?? 0,
                    onChange: function (e) { updateField('pcieFrac', Number(e.target.value)); }
                  })
                ),
                // v2.5.10：七个新引擎参数（三态：空=保持Рабочий файл конфигурации现状; 0=删旗标回引擎По умолчанию; 有效值=写入）
                h(
                  'div',
                  { className: 'sac-field' },
                  h('label', { className: 'sac-label' }, 'Число draft-токенов (--spec, пусто=не менять, 0=удалить флаг)'),
                  h('input', {
                    type: 'number', className: 'sac-input', min: 0, step: 1, placeholder: 'например 4; пусто = оставить как в файле',
                    value: activeSettings.spec ?? '',
                    onChange: function (e) { updateField('spec', e.target.value === '' ? null : Number(e.target.value)); }
                  }),
                  h('div', { style: { fontSize: 11, color: '#94a3b8', marginTop: 4 } }, 'Встроенный suffix-draft движка увеличивает verify-окно до флаг+2 (макс. 8); таблица расхождений и карточка движка показывают «фактическое окно», а не исходное значение флага (--spec 4 → фактически 6 — это норма).')
                ),
                h(
                  'div',
                  { className: 'sac-field' },
                  h('label', { className: 'sac-label' }, 'Порог принятия draft (--spec-min-p, 0~1; пусто=не менять, 0=удалить флаг)'),
                  h('input', {
                    type: 'number', className: 'sac-input', min: 0, max: 1, step: 0.05, placeholder: 'например 0.5',
                    value: activeSettings.specMinP ?? '',
                    onChange: function (e) { updateField('specMinP', e.target.value === '' ? null : Number(e.target.value)); }
                  })
                ),
                h(
                  'div',
                  { className: 'sac-field' },
                  h('label', { className: 'sac-label' }, 'Разбиение префилла (--prefill; пусто=не менять, off=удалить флаг)'),
                  h('input', {
                    type: 'text', className: 'sac-input', placeholder: 'auto:32768 / auto / число / off',
                    value: activeSettings.prefill ?? '',
                    onChange: function (e) { updateField('prefill', e.target.value.trim() === '' ? null : e.target.value.trim()); }
                  })
                ),
                h(
                  'div',
                  { className: 'sac-field' },
                  h('label', { className: 'sac-label' }, 'CPU-потоки (--pool-workers, пусто=не менять, 0=удалить флаг)'),
                  h('input', {
                    type: 'number', className: 'sac-input', min: 0, step: 1, placeholder: 'например 14',
                    value: activeSettings.poolWorkers ?? '',
                    onChange: function (e) { updateField('poolWorkers', e.target.value === '' ? null : Number(e.target.value)); }
                  })
                ),
                h(
                  'div',
                  { className: 'sac-field' },
                  h('label', { className: 'sac-label' }, 'Частота адаптации кэша экспертов (--adapt-every, 1=каждый раунд; пусто=не менять, 0=удалить флаг)'),
                  h('input', {
                    type: 'number', className: 'sac-input', min: 0, step: 1, placeholder: 'например 1',
                    value: activeSettings.adaptEvery ?? '',
                    onChange: function (e) { updateField('adaptEvery', e.target.value === '' ? null : Number(e.target.value)); }
                  })
                ),
                h(
                  'div',
                  { className: 'sac-field' },
                  h('label', { className: 'sac-label' }, 'Число экспертов на обмен (--adapt-swaps; пусто=не менять, 0=удалить флаг)'),
                  h('input', {
                    type: 'number', className: 'sac-input', min: 0, step: 1, placeholder: 'например 160',
                    value: activeSettings.adaptSwaps ?? '',
                    onChange: function (e) { updateField('adaptSwaps', e.target.value === '' ? null : Number(e.target.value)); }
                  })
                ),
                h(
                  'div',
                  { className: 'sac-field' },
                  h('label', { className: 'sac-label' }, 'Коэффициент затухания адаптации (--adapt-decay, 0~1, типично 0.97; пусто=не менять, 0=удалить флаг)'),
                  h('input', {
                    type: 'number', className: 'sac-input', min: 0, step: 0.01, placeholder: 'например 0.97',
                    value: activeSettings.adaptDecay ?? '',
                    onChange: function (e) { updateField('adaptDecay', e.target.value === '' ? null : Number(e.target.value)); }
                  }),
                  h('div', { style: { fontSize: 11, color: '#94a3b8' } }, 'Три состояния: пусто = оставить как в конфигурации; 0 = удалить флаг (вернуть умолчание движка); значение = записать. Показаны значения из файла конфигурации; карточка движка дополнительно показывает фактическое значение запущенного экземпляра (spec / min-p / потоки) — расхождения попадают в таблицу «не совпадает с запущенным экземпляром».')
                ),
                h(
                  'div',
                  { className: 'sac-field' },
                  h('label', { className: 'sac-label' }, 'Пропуск хвоста маршрутизации (STRATA_ROUTE_TAIL_SKIP, пусто=не задано)'),
                  h('input', {
                    type: 'number', className: 'sac-input', min: 0, step: 1,
                    placeholder: 'пусто = движок решит сам; 7 = включено (рекомендуется); 0 = принудительно выключено',
                    value: (activeSettings.engineEnv || {})['STRATA_ROUTE_TAIL_SKIP'] ?? '',
                    onChange: function (e) { setEnvEntry('STRATA_ROUTE_TAIL_SKIP', e.target.value); }
                  }),
                  h('div', { style: { fontSize: 11, color: '#94a3b8' } }, 'Значение N: в окне verify каждый токен, маршрутизированный с rank≤N к непопавшему в кэш эксперту, пропускается напрямую (для карт 12-16GB без части экспертов +10~20% декодирования, ответы могут немного отличаться)')
                ),
                h(
                  'div',
                  { className: 'sac-field' },
                  h('label', { className: 'sac-label' }, 'Параллельные запросы (--parallel, 0=адаптация к видеокарте)'),
                  h('input', {
                    type: 'number', className: 'sac-input', min: 0, max: 8,
                    value: activeSettings.parallel ?? 0,
                    onChange: function (e) { updateField('parallel', Number(e.target.value)); }
                  })
                ),
                h(
                  'div',
                  { className: 'sac-field' },
                  h('label', { className: 'sac-label' }, 'Порт службы (--port)'),
                  h('input', {
                    type: 'number', className: 'sac-input', min: 1024, max: 65535,
                    value: activeSettings.enginePort || 8080,
                    onChange: function (e) { updateField('enginePort', Number(e.target.value)); }
                  })
                ),
                h(
                  'div',
                  { className: 'sac-field' },
                  h('label', { className: 'sac-label' }, 'Зона доступа (--access)'),
                  h(
                    'select',
                    {
                      className: 'sac-select',
                      value: activeSettings.access || 'local',
                      onChange: function (e) { updateField('access', e.target.value); }
                    },
                    h('option', { value: 'local' }, 'local (только этот ПК, 127.0.0.1)'),
                    h('option', { value: 'lan' }, 'lan (локальная сеть, рекомендуется указать API key)'),
                    h('option', { value: 'cloudflare' }, 'cloudflare (нужен cloudflared)'),
                    h('option', { value: 'tailscale' }, 'tailscale (нужно активное подключение)')
                  ),
                  h('div', { style: { fontSize: 11, color: '#94a3b8', marginTop: 4 } }, 'Зона доступа задаётся при запуске: сохранение влияет только на следующий запуск, привязка запущенного экземпляра не меняется — после изменения нужны «Стоп» и «Запуск». При lan Strata пишет 0.0.0.0, но брандмауэр Windows по умолчанию блокирует входящий TCP (Strata лишь предупреждает; нужен администратор, чтобы разрешить 8080); lan с пустым API Key = локальная сеть без авторизации. Реальный адрес прослушивания смотрите на странице /diagnose в portProbe.')
                ),
                h(
                  'div',
                  { className: 'sac-field' },
                  h('label', { className: 'sac-label' }, 'API Key (необязательно, --api-key)'),
                  h('input', {
                    type: 'text', className: 'sac-input', placeholder: 'пусто = без авторизации',
                    value: activeSettings.apiKey || '',
                    onChange: function (e) { updateField('apiKey', e.target.value); }
                  })
                ),
                h(
                  'div',
                  { className: 'sac-field full' },
                  h('label', { className: 'sac-label' }, 'Переменные окружения движка (STRATA_*, записываются в env + launch --set, действуют после перезапуска модели)'),
                  Object.keys(activeSettings.engineEnv || {}).map(function (k) {
                    return h(
                      'div',
                      { key: k, style: { display: 'flex', gap: '6px', alignItems: 'center', marginBottom: '6px' } },
                      h('input', {
                        type: 'text', className: 'sac-input', style: { flex: '1 1 45%' },
                        value: k, readOnly: true, title: 'Имя переменной нельзя менять напрямую: удалите и добавьте заново'
                      }),
                      h('input', {
                        type: 'text', className: 'sac-input', style: { flex: '1 1 45%' }, placeholder: 'Значение (пустое при сохранении удаляет переменную)',
                        value: String((activeSettings.engineEnv || {})[k] || ''),
                        onChange: function (e) { setEnvEntry(k, e.target.value); }
                      }),
                      h('button', { className: 'sac-btn danger', style: { flexShrink: 0 }, onClick: function () { removeEnvEntry(k); } }, '✕')
                    );
                  }),
                  h(
                    'div',
                    { style: { display: 'flex', gap: '6px', alignItems: 'center' } },
                    h('input', {
                      type: 'text', className: 'sac-input', style: { flex: '1 1 45%' },
                      placeholder: 'Имя переменной (напр. STRATA_ROUTE_TAIL_SKIP)',
                      value: newEnvKey, onChange: function (e) { setNewEnvKey(e.target.value); }
                    }),
                    h('input', {
                      type: 'text', className: 'sac-input', style: { flex: '1 1 45%' },
                      placeholder: 'Значение (напр. 7)',
                      value: newEnvValue, onChange: function (e) { setNewEnvValue(e.target.value); }
                    }),
                    h('button', { className: 'sac-btn', style: { flexShrink: 0 }, onClick: addEnvEntryFromInputs }, '＋ Добавить')
                  ),
                  h(
                    'div',
                    { style: { fontSize: 11.5, color: '#64748b', marginTop: 2, lineHeight: 1.6 } },
                    'Для STRATA_ROUTE_TAIL_SKIP выше есть отдельное поле (здесь отображается синхронно); этот редактор — для прочих STRATA_* переменных (напр. STRATA_TAIL_SKIP_MAX_CACHED, STRATA_PIN_BY_NEED). Пустое значение при сохранении удаляет переменную.'
                  )
                )
              )
            ),

            // 服务端По умолчанию参数（runconfig.py 可编辑键）
            h(
              'div',
              { className: 'sac-card' },
              h('div', { className: 'sac-card-header' }, h('h3', { className: 'sac-card-title' }, '🎛️ Сэмплинг и значения службы по умолчанию (strata-<model>.json)'), srcPill),
              h(
                'div',
                { className: 'sac-form-grid' },
                h(
                  'div',
                  { className: 'sac-field' },
                  h('label', { className: 'sac-label' }, h('span', null, 'Температура (sampling.temperature)'), h('span', null, activeSettings.temperature ?? 0.7)),
                  h('input', { type: 'number', step: 0.05, min: 0, max: 2, className: 'sac-input', value: activeSettings.temperature ?? 0.7, onChange: function (e) { updateField('temperature', Number(e.target.value)); } })
                ),
                h(
                  'div',
                  { className: 'sac-field' },
                  h('label', { className: 'sac-label' }, h('span', null, 'Top-P (sampling.top_p)'), h('span', null, activeSettings.topP ?? 0.95)),
                  h('input', { type: 'number', step: 0.01, min: 0.05, max: 1, className: 'sac-input', value: activeSettings.topP ?? 0.95, onChange: function (e) { updateField('topP', Number(e.target.value)); } })
                ),
                h(
                  'div',
                  { className: 'sac-field' },
                  h('label', { className: 'sac-label' }, 'Top-K (sampling.top_k, 1-64)'),
                  h('input', { type: 'number', step: 1, min: 1, max: 64, className: 'sac-input', value: activeSettings.topK ?? 20, onChange: function (e) { updateField('topK', Number(e.target.value)); } })
                ),
                h(
                  'div',
                  { className: 'sac-field' },
                  h('label', { className: 'sac-label' }, 'Min-P (sampling.min_p, 0=выключено)'),
                  h('input', { type: 'number', step: 0.01, min: 0, max: 1, className: 'sac-input', value: activeSettings.minP ?? 0, onChange: function (e) { updateField('minP', Number(e.target.value)); } })
                ),
                h(
                  'div',
                  { className: 'sac-field' },
                  h('label', { className: 'sac-label' }, 'Штраф за повторения (sampling.presence_penalty)'),
                  h('input', { type: 'number', step: 0.1, min: 0, max: 2, className: 'sac-input', value: activeSettings.presencePenalty ?? 0, onChange: function (e) { updateField('presencePenalty', Number(e.target.value)); } })
                ),
                h(
                  'div',
                  { className: 'sac-field' },
                  h('label', { className: 'sac-label' }, 'Поведение, когда Anthropic не просит думать (anthropic_thinking)'),
                  h(
                    'select',
                    {
                      className: 'sac-select',
                      value: activeSettings.anthropicThinking || '',
                      onChange: function (e) { updateField('anthropicThinking', e.target.value); }
                    },
                    h('option', { value: '' }, 'Не задано (по умолч. = model: думать по правилам модели)'),
                    h('option', { value: 'model' }, 'model — думать даже без требования в запросе'),
                    h('option', { value: 'on_request' }, 'on_request — думать только когда явно просит запрос (экономия бюджета)')
                  )
                ),
                h(
                  'div',
                  { className: 'sac-field' },
                  h('label', { className: 'sac-label' }, 'Интенсивность размышлений (reasoning_effort)'),
                  h(
                    'select',
                    {
                      className: 'sac-select',
                      value: activeSettings.reasoningEffort || 'none',
                      onChange: function (e) { updateField('reasoningEffort', e.target.value); }
                    },
                    h('option', { value: 'none' }, 'none (без размышлений)'),
                    h('option', { value: 'low' }, 'low'),
                    h('option', { value: 'medium' }, 'medium'),
                    h('option', { value: 'high' }, 'high')
                  )
                ),
                h(
                  'div',
                  { className: 'sac-field' },
                  h('label', { className: 'sac-label' }, 'Лимит токенов на размышления (reasoning_budget_tokens)'),
                  h('input', { type: 'number', step: 1024, min: 0, max: 131072, className: 'sac-input', value: activeSettings.reasoningBudgetTokens ?? 16000, onChange: function (e) { updateField('reasoningBudgetTokens', Number(e.target.value)); } })
                ),
                h(
                  'div',
                  { className: 'sac-field' },
                  h('label', { className: 'sac-label' }, 'Секунды до автовыгрузки при простое (idle_unload_s, 0=не выгружать)'),
                  h('input', { type: 'number', step: 60, min: 0, className: 'sac-input', value: activeSettings.idleUnloadS ?? 0, onChange: function (e) { updateField('idleUnloadS', Number(e.target.value)); } })
                ),
                h(
                  'div',
                  { className: 'sac-field' },
                  h('label', { className: 'sac-label' }, 'Таймаут тишины движка (engine_silence_s, по умолч. 300, 0=ждать всегда)'),
                  h('input', { type: 'number', step: 30, min: 0, className: 'sac-input', value: activeSettings.engineSilenceS ?? 300, onChange: function (e) { updateField('engineSilenceS', Number(e.target.value)); } })
                ),
                h(
                  'div',
                  { className: 'sac-field full' },
                  h(
                    'label',
                    { style: { display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#475569', cursor: 'pointer' } },
                    h('input', {
                      type: 'checkbox',
                      checked: Boolean(activeSettings.apiMonitor),
                      onChange: function (e) { updateField('apiMonitor', e.target.checked); }
                    }),
                    'Включить страницу мониторинга API (api_monitor, хранит промпты и ответы последних 100 запросов для /api-monitor)'
                  )
                ),
                h(
                  'div',
                  { className: 'sac-field full' },
                  h(
                    'label',
                    { style: { display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#475569', cursor: 'pointer' } },
                    h('input', {
                      type: 'checkbox',
                      checked: activeSettings.fitMaxTokens !== false,
                      onChange: function (e) { updateField('fitMaxTokens', e.target.checked); }
                    }),
                    'Обрезать max_tokens, не влезающий в контекст (fit_max_tokens, по умолч. вкл.; выкл. = возврат 400 как в llama.cpp)'
                  )
                )
              )
            ),

            // 安装路径
            h(
              'div',
              { className: 'sac-card' },
              h(
                'div',
                { className: 'sac-card-header' },
                h('h3', { className: 'sac-card-title' }, '🗂️ Пути установки на этом ПК (при недействительности обнаруживаются и заполняются автоматически, можно править вручную)'),
                h('button', { className: 'sac-btn', onClick: handleCopyDiagnose }, '📋 Скопировать диагностику')
              ),
              (function () {
                if (!status) return null;
                // 宿主没有 pathSources 字段 = host 进程仍在运行 v2.4 之前的旧模块（界面热更新了, 宿主没有）
                if (status.pathSources === undefined) {
                  return h(
                    'div',
                    { style: { fontSize: 11.5, color: '#b91c1c', lineHeight: 1.7 } },
                    '⚠ Хост-процесс всё ещё выполняет старую версию плагина (нет данных о путях, код host < v2.4). Полностью выйдите из DeepSeek Harness (включая значок в трее) и откройте заново, чтобы хост загрузил свежий код.'
                  );
                }
                var src = status.pathSources || {};
                var CN = { saved: 'Сохранено', env: 'Переменная окружения', detected: 'Автоопределение', missing: 'Не найдено', 'settings-file': 'Файл настроек', 'app-settings': 'Настройки приложения', documents: 'Папка «Документы»', 'default': 'По умолчанию' };
                var FIELDS = [['strataCliPath', 'CLI'], ['terminalDir', 'Папка терминала'], ['strataInstallDir', 'Корень установки'], ['strataComponentsDir', 'Папка компонентов'], ['strataDataDir', 'Папка данных'], ['runConfigDir', 'Предпочтительная папка конфигурации']];
                var anyBad = FIELDS.some(function (f) { return src[f[0]] && src[f[0]] !== 'saved' && src[f[0]] !== 'env'; });
                return h(
                  'div',
                  { style: { fontSize: 11.5, color: anyBad ? '#b45309' : '#64748b', lineHeight: 1.7 } },
                  'Источник пути: ' +
                    FIELDS.map(function (f) {
                      return f[1] + '(' + (CN[src[f[0]]] || src[f[0]] || '?') + ')';
                    }).join(' · ') +
                    (anyBad ? ' — поля, помеченные как не «Сохранено», являются автонайденными и фиксируются после сохранения параметров' : '') +
                    (status.pluginVersion ? ' · версия host-плагина v' + status.pluginVersion : '')
                );
              })(),
              h(
                'div',
                { className: 'sac-form-grid' },
                h(
                  'div',
                  { className: 'sac-field full' },
                  h('label', { className: 'sac-label' }, 'strata CLI (strata.cmd)'),
                  h('input', { type: 'text', className: 'sac-input', value: activeSettings.strataCliPath || '', onChange: function (e) { updateField('strataCliPath', e.target.value); } })
                ),
                h(
                  'div',
                  { className: 'sac-field' },
                  h('label', { className: 'sac-label' }, 'STRATA_INSTALL_DIR'),
                  h('input', { type: 'text', className: 'sac-input', value: activeSettings.strataInstallDir || '', onChange: function (e) { updateField('strataInstallDir', e.target.value); } })
                ),
                h(
                  'div',
                  { className: 'sac-field' },
                  h('label', { className: 'sac-label' }, 'STRATA_DATA_DIR (данные моделей)'),
                  h('input', { type: 'text', className: 'sac-input', value: activeSettings.strataDataDir || '', onChange: function (e) { updateField('strataDataDir', e.target.value); } })
                ),
                h(
                  'div',
                  { className: 'sac-field' },
                  h('label', { className: 'sac-label' }, 'STRATA_COMPONENTS_DIR (компоненты движка)'),
                  h('input', { type: 'text', className: 'sac-input', value: activeSettings.strataComponentsDir || '', onChange: function (e) { updateField('strataComponentsDir', e.target.value); } })
                ),
                h(
                  'div',
                  { className: 'sac-field' },
                  h('label', { className: 'sac-label' }, 'Предпочтительная папка конфигурации (strata-<model>.json; реально обнаруживается несколько)'),
                  h('input', { type: 'text', className: 'sac-input', value: activeSettings.runConfigDir || '', onChange: function (e) { updateField('runConfigDir', e.target.value); } })
                ),
                h(
                  'div',
                  { className: 'sac-field full' },
                  h('label', { className: 'sac-label' }, 'Обнаруженные папки конфигурации'),
                  h(
                    'div',
                    { style: { fontSize: 12, color: '#475569', lineHeight: 1.7, wordBreak: 'break-all' } },
                    ((installation.runConfigPlaces || []).length > 0
                      ? (installation.runConfigPlaces || []).map(function (p) {
                          return h('div', { key: p.path }, '· ' + p.path + ' (' + p.source + ', ' + p.configCount + ' конф.)');
                        })
                      : h('div', null, 'strata-*.json не найден ни в одной известной папке (панель / STRATA_INSTALL_DIR / STRATA_DATA_DIR\install / папка терминала / installs из %APPDATA%\Strata\settings.json / общая папка install)'))
                  )
                ),
                h(
                  'div',
                  { className: 'sac-field full' },
                  h(
                    'label',
                    { style: { display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#475569', cursor: 'pointer' } },
                    h('input', {
                      type: 'checkbox',
                      checked: activeSettings.useProxyAndMirror !== false,
                      onChange: function (e) { updateField('useProxyAndMirror', e.target.checked); }
                    }),
                    'Использовать прокси http://127.0.0.1:7897 и зеркало HF hf-mirror.com при запуске/обновлении (включить, если нужен внешний прокси)'
                  )
                )
              ),
              h(
                'div',
                { style: { display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '6px', flexWrap: 'wrap' } },
                h('button', { className: 'sac-btn', onClick: handleSaveSettings, disabled: busy }, '💾 Сохранить параметры в конфигурацию'),
                h('button', { className: 'sac-btn primary', onClick: handleStartEngine, disabled: busy }, engine.online ? '🚀 Сохранить и перезапустить модель (--restart)' : '🚀 Сохранить и запустить модель')
              )
            )
          )
        );
      }

      // ---- 升级页（strata update / components rollback）----
      function renderUpdateTab() {
        var report = updReport && updReport.report;
        var feed = (report && report.feed) || null;
        var eng = (report && report.engine) || null;
        var ctl = (report && report.control) || null;
        var app = (report && report.app) || null;
        var compState = (updStatus && updStatus.componentState) || (updReport && updReport.componentState) || null;
        var prevEngine = compState && compState.engine && compState.engine.previous;
        var activeEngine = compState && compState.engine && compState.engine.active;
        var lastResult = (updStatus && updStatus.lastResult) || null;
        var history = (compState && compState.history) || [];
        var engineStatusPill = function (st) {
          if (st === 'current') return h('span', { className: 'sac-pill online' }, 'Уже актуально');
          if (st === 'available') return h('span', { className: 'sac-pill warning' }, 'Есть обновление');
          if (st === 'install') return h('span', { className: 'sac-pill warning' }, 'Не установлено, доступно в источнике');
          return h('span', { className: 'sac-pill danger' }, st || '—');
        };
        var mib = function (n) {
          return n != null ? Math.round(n / 1048576) + ' MiB' : '—';
        };

        return h(
          'div',
          { style: { display: 'flex', flexDirection: 'column', gap: '16px' } },
          // 1. 当前安装版本
          h(
            'div',
            { className: 'sac-card' },
            h('div', { className: 'sac-card-header' }, h('h3', { className: 'sac-card-title' }, '📦 Установленные компоненты')),
            h('div', { className: 'sac-kv-row' }, h('span', null, 'Control (фактически действует, обновляется через strata update)'), h('span', { className: 'sac-kv-val' }, (installation.controlActive && installation.controlActive.version) || (ctl && ctl.installed) || '— (не устанавливалось через strata update)')),
            h('div', { className: 'sac-kv-row' }, h('span', null, 'Установленная версия Control'), h('span', { className: 'sac-kv-val' }, (installation.controlVersions || []).join(', ') || '—')),
            h('div', { className: 'sac-kv-row', title: 'Папка терминала не меняется при strata update; для обновления терминала перезапустите официальный скрипт install.ps1' }, h('span', null, 'Папка терминала (не меняется при strata update)'), h('span', { className: 'sac-kv-val' }, installation.terminalVersion || '—')),
            h('div', { className: 'sac-kv-row' }, h('span', null, 'Компонент движка (active)'), h('span', { className: 'sac-kv-val' }, activeEngine || (installation.engines || []).join(', ') || '—')),
            h('div', { className: 'sac-kv-row' }, h('span', null, 'Установленная папка движка'), h('code', { className: 'sac-kv-val' }, (installation.engines || []).join(', ') || '—')),
            h('div', { className: 'sac-kv-row' }, h('span', null, 'Доступная для отката версия (previous)'), h('span', { className: 'sac-kv-val' }, prevEngine || 'Нет (старая версия сохраняется автоматически после первого обновления)')),
            (compState && compState.feed)
              ? h('div', { className: 'sac-kv-row' }, h('span', null, 'Источник обновлений, запомненный папкой компонентов'), h('code', { className: 'sac-kv-val' }, compState.feed.source + ' (sequence ' + compState.feed.sequence + ')'))
              : null,
            history.length > 0
              ? h(
                  'div',
                  { className: 'sac-kv-row' },
                  h('span', null, 'История обновлений (последние ' + Math.min(3, history.length) + ' записей)'),
                  h('span', { className: 'sac-kv-val' }, history.slice(-3).reverse().map(function (hh) {
                    return (hh.action || '?') + ' ' + (hh.from || '∅') + '→' + (hh.to || '?') + (hh.ok ? ' ✓' : ' ✗');
                  }).join(' · '))
                )
              : null
          ),

          // v2.5.7③：运行实例不在组件体系内（本地构建/旧组件）→ 讲清升级/回滚的影响范围
          (status && status.components && status.components.runningInSync === false)
            ? h(
                'div',
                { className: 'sac-card', style: { borderLeft: '3px solid #d97706' } },
                h(
                  'div',
                  { style: { fontSize: 12.5, color: '#b45309' } },
                  '⚠ Версия движка запущенного экземпляра ' + (status.components.runningVersion || '?') +
                    ' не совпадает с active в системе компонентов (' + (status.components.active || '?') +
                    ') — вероятно, экземпляр запущен из локальной сборки вне папки компонентов или из старого компонента. Обновление/откат меняют только содержимое папки компонентов, не запущенный экземпляр; чтобы применить новый компонент, остановите службу и запустите заново через «Запуск».'
                )
              )
            : null,

          // 2. Проверить обновления
          h(
            'div',
            { className: 'sac-card' },
            h(
              'div',
              { className: 'sac-card-header' },
              h('h3', { className: 'sac-card-title' }, '🔎 Проверить обновления (strata update --check)'),
              h('button', { className: 'sac-btn primary', onClick: handleUpdateCheck, disabled: updChecking || busy }, updChecking ? 'Проверка…' : 'Проверить обновления')
            ),
            h(
              'div',
              { className: 'sac-field full' },
              h('label', { className: 'sac-label' }, 'Источник обновлений (--feed, официальный подписанный)'),
              h('input', {
                type: 'text', className: 'sac-input',
                value: activeSettings.updateFeed || '',
                placeholder: 'https://github.com/Niko1221/Strata/releases/latest/download/strata-feed.json',
                onChange: function (e) { updateField('updateFeed', e.target.value); }
              })
            ),
            h('div', { style: { fontSize: 11.5, color: '#64748b' } }, 'Прим.: источник, запомненный папкой компонентов, может быть локальным оффлайн-источником (остаётся после оффлайн-установки и всегда показывает «уже актуально»), поэтому здесь по умолчанию явно указан официальный подписанный источник; можно также указать локальный путь для оффлайн-установки. Сетевой доступ идёт через прокси из окружения запуска.'),
            report
              ? h(
                  'div',
                  { style: { display: 'flex', flexDirection: 'column', gap: '8px' } },
                  h('div', { className: 'sac-kv-row' }, h('span', null, 'Источник обновлений'), h('span', { className: 'sac-kv-val' }, 'sequence ' + (feed && feed.sequence) + ' · ' + (feed && feed.channel) + ' канал · подпись ' + (feed && feed.key_id) + ' (' + (feed && feed.trusted_by) + ') · создано ' + String(feed && feed.generated_at || '').replace('T', ' ').replace('Z', ' UTC'))),
                  h(
                    'div',
                    { className: 'sac-kv-row' },
                    h('span', null, 'Движок (Engine)'),
                    h('span', { className: 'sac-kv-val' }, engineStatusPill(eng.status), ' ',
                      ((eng.installed || {}).version || 'Не установлено') + (eng.offered && eng.status === 'available' ? ' → ' + eng.offered.version + ' (' + mib(eng.download_bytes) + ')' : ''),
                      eng.offered && eng.offered.min_driver && eng.offered.min_driver.nvidia ? ' · нужен драйвер ≥ ' + eng.offered.min_driver.nvidia : '')
                  ),
                  (eng.reasons && eng.reasons.length > 0)
                    ? h('div', { style: { fontSize: 11.5, color: '#94a3b8' } }, 'Невыбранные пакеты: ' + eng.reasons.slice(0, 2).join('; ') + (eng.reasons.length > 2 ? ' и др. ' + eng.reasons.length + ' записей' : ''))
                    : null,
                  h('div', { className: 'sac-kv-row' }, h('span', null, 'Control (компонент управления терминалом)'), h('span', { className: 'sac-kv-val' }, (ctl.installed || '?') + ' → ' + (ctl.offered || '?') + ' · ' + (ctl.status || '—') + ' · ' + mib(ctl.download_bytes))),
                  h('div', { className: 'sac-kv-row' }, h('span', null, 'Настольное приложение (App, опционально)'), h('span', { className: 'sac-kv-val' }, 'Источник предоставляет ' + (app.offered || '?') + ' · ' + mib(app.download_bytes) + ' · на этом ПК настольное приложение не установлено')),
                  report.serving && report.serving.length
                    ? h('div', { style: { fontSize: 11.5, color: '#b45309' } }, 'Работает движок (' + report.serving.map(function (s) { return s.profile; }).join(', ') + '): официальное обновление сначала остановит его.')
                    : null
                )
              : h('div', { style: { fontSize: 12, color: '#64748b' } }, 'Ещё не проверялось. Нажмите «Проверить обновления» справа вверху, чтобы прочитать подписанный отчёт источника (только чтение, без скачивания компонентов).')
          ),

          // 3. 执行升级 + 进度日志
          h(
            'div',
            { className: 'sac-card' },
            h(
              'div',
              { className: 'sac-card-header' },
              h('h3', { className: 'sac-card-title' }, '⬆️ Выполнить обновление (strata update)'),
              h(
                'div',
                { style: { display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' } },
                h(
                  'label',
                  { style: { display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: 12, color: '#475569', cursor: 'pointer' } },
                  h('input', { type: 'checkbox', checked: updForce, onChange: function (e) { setUpdForce(e.target.checked); } }),
                  '--force повторить неудачную/откаченную версию'
                ),
                h('button', { className: 'sac-btn success', onClick: handleUpdateApply, disabled: busy || updRunning }, updRunning ? 'Идёт обновление…' : '🚀 Остановить службу и обновить')
              )
            ),
            h('div', { style: { fontSize: 12, color: '#64748b' } }, 'Полностью как strata update: остановка службы → скачивание подписанного пакета и проверка хэша/подписи → тестовый запуск (запуск, ответ одного токена, остановка) → переключение; старая версия движка сохраняется, откат в любой момент. Пресеты тюнинга лишь помечаются на перепроверку, не удаляются.'),
            updStatus
              ? h(
                  'div',
                  { style: { display: 'flex', flexDirection: 'column', gap: '8px' } },
                  h(
                    'div',
                    { className: 'sac-kv-row' },
                    h('span', null, 'Статус задачи'),
                    h('span', { className: 'sac-kv-val' },
                      h('span', { className: 'sac-pill ' + (updStatus.running ? 'warning' : 'stopped') }, updStatus.running ? '● Выполняется (pid ' + updStatus.pid + ')' : '○ Простой'),
                      ' ',
                      updStatus.command || '')
                  ),
                  lastResult
                    ? h(
                        'div',
                        { style: { padding: '8px 12px', borderRadius: 8, background: lastResult.ok ? '#ecfdf5' : '#fef2f2', border: '1px solid ' + (lastResult.ok ? '#a7f3d0' : '#fecaca'), color: lastResult.ok ? '#065f46' : '#991b1b', fontSize: 12 } },
                        (lastResult.results
                          ? lastResult.results.map(function (r) {
                              return r.component + ': ' + r.status + ((r.installed_before && r.installed_before.version) || r.installed_before ? ' ' + ((r.installed_before && r.installed_before.version) || r.installed_before) + '→' + ((r.installed_after && r.installed_after.version) || r.installed_after || '') : '') + (r.error ? ' · ' + r.error : '');
                            }).join('; ')
                          : lastResult.from
                            ? 'Движок откачен: ' + lastResult.from + ' → ' + lastResult.to + (lastResult.presets_marked ? ' (пресеты тюнинга помечены на перепроверку)' : '')
                            : JSON.stringify(lastResult).slice(0, 300))
                      )
                    : null,
                  h(
                    'div',
                    { className: 'sac-log-box' },
                    '# ' + (updStatus.logPath || '') + '\n' + ((updStatus.logTail || []).join('\n') || '(нет вывода)')
                  )
                )
              : h('div', { style: { fontSize: 12, color: '#64748b' } }, 'Обновление ещё не выполнялось.')
          ),

          // 4. 回滚
          h(
            'div',
            { className: 'sac-card' },
            h(
              'div',
              { className: 'sac-card-header' },
              h('h3', { className: 'sac-card-title' }, '⏮ Откатить движок (strata components rollback)'),
              h('button', { className: 'sac-btn danger', onClick: handleUpdateRollback, disabled: busy || updRunning || !prevEngine }, prevEngine ? 'Откат к ' + prevEngine : 'Нет версии для отката')
            ),
            h('div', { style: { fontSize: 12, color: '#64748b' } }, 'Доступно, только если последнее обновление сохранило старую версию (после успешного обновления previous записывается автоматически). Чтобы после отката снова попробовать новый, используйте обновление с --force.')
          )
        );
      }

      var online = Boolean(engine.online);
      return h(
        'div',
        { className: 'sac-root', 'data-plugin': PKG_ID },
        h(
          'div',
          { className: 'sac-container' },
          // 顶栏
          h(
            'div',
            { className: 'sac-header' },
            h(
              'div',
              { className: 'sac-title-row' },
              h('div', { className: 'sac-brand-badge' }, 'AI'),
              h(
                'div',
                null,
                h(
                  'h1',
                  { className: 'sac-title' },
                  'AI Центр управления',
                  h('span', { className: 'sac-pill ' + (online ? 'online' : 'stopped') }, online ? '● Выполняется: ' + (engine.model || '') : '○ Не запущено')
                ),
                h('div', { className: 'sac-subtitle' }, 'Локальный движок вывода Strata · ' + (installation.cliPath || activeSettings.strataCliPath || '') + (installation.terminalVersion ? ' (терминал ' + installation.terminalVersion + ')' : ''))
              )
            ),
            h(
              'div',
              { className: 'sac-tabs', role: 'tablist' },
              h('button', { className: 'sac-tab-btn' + (activeTab === 'monitor' ? ' active' : ''), onClick: function () { setActiveTab('monitor'); } }, '📊 Мониторинг (Monitor)'),
              h('button', { className: 'sac-tab-btn' + (activeTab === 'models' ? ' active' : ''), onClick: function () { setActiveTab('models'); } }, '🧩 Модели и параметры (Models)'),
              h('button', { className: 'sac-tab-btn' + (activeTab === 'update' ? ' active' : ''), onClick: function () { setActiveTab('update'); } }, '⬆️ Обновление (Update)' + (updRunning ? ' ●' : ''))
            ),
            h(
              'div',
              { className: 'sac-actions' },
              h('button', { className: 'sac-btn success', onClick: handleStartEngine, disabled: busy }, online ? '▶ Перезапустить модель' : '▶ Запустить модель'),
              h('button', { className: 'sac-btn danger', onClick: handleStopEngine, disabled: busy }, '■ Остановить службу'),
              h('button', { className: 'sac-btn', onClick: handleUnload, disabled: busy }, '⏏ Выгрузить VRAM'),
              h('button', { className: 'sac-btn', onClick: handleOpenWeb }, '🌐 Веб-консоль')
            )
          ),

          toast
            ? h(
                'div',
                { className: 'sac-toast' },
                h('span', { style: { minWidth: 0 } }, 'ℹ️ ' + toast),
                h('button', { style: { background: 'transparent', border: 'none', color: 'inherit', cursor: 'pointer' }, onClick: function () { setToast(''); } }, '✕')
              )
            : null,

          activeTab === 'monitor' ? renderMonitorTab() : activeTab === 'models' ? renderModelsTab() : renderUpdateTab()
        )
      );
    }

    var inject = ['slots'];

    function apply(ctx) {
      ensureStyles();

      // 1. 左侧栏「Memory System」下方注册入口
      ctx.slots.inject('sidebar.panellist', function () {
        return ctx.slots.register(
          {
            name: 'sidebar.panellist',
            id: PANEL_ID,
            order: 25,
            label: 'AI Центр управления'
          },
          SidebarEntryIcon
        );
      });

      // 2. 主视图注册管理面板
      ctx.slots.inject('main', function () {
        return ctx.slots.register(
          {
            name: 'main',
            key: PANEL_ID
          },
          StrataAiCenterPanel
        );
      });

      // 侧栏重渲染时保持顺序（v2.5.7⑤：兜底观察器, 400ms 防抖; 专用观察器在侧栏容器定位后挂上）
      if (typeof document !== 'undefined' && typeof MutationObserver !== 'undefined') {
        var obs = new MutationObserver(function () {
          schedulePin(400);
        });
        obs.observe(document.body, { childList: true, subtree: true });
        if (typeof ctx.effect === 'function') {
          ctx.effect(function () {
            return function () {
              obs.disconnect();
            };
          }, 'dsh-strata-ai-center:sidebar-order');
        }
      }
    }

    return {
      name: PKG_ID,
      inject: inject,
      apply: apply,
      StrataAiCenterPanel: StrataAiCenterPanel,
      SidebarEntryIcon: SidebarEntryIcon
    };
  }

  if (typeof window !== 'undefined' && window.__ModuleLoader__ && typeof window.__ModuleLoader__.load === 'function') {
    window.__ModuleLoader__.load({
      id: PKG_ID,
      factory: function (requireFn) {
        return createPlugin(requireFn);
      }
    });
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = createPlugin;
  }
})();
