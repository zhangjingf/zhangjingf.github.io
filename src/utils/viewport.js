/**
 * 允许强制将设置倍数为 1
 */
const that = module.exports;
let inited = false;
const win = window;
const doc = document;
const rootEl = doc.documentElement;
const isAndroid = win.navigator.appVersion.match(/android/gi);
const isIPhone = win.navigator.appVersion.match(/iphone/gi);

// eslint-disable-next-line func-names
that.init = function (absDpr) {
  if (inited) return;
  const header = doc.getElementsByTagName('head')[0];
  const viewport = doc.createElement('meta');
  const { devicePixelRatio } = win;
  let dpr = absDpr || devicePixelRatio;
  let tid = null;
  inited = true;

  if (isIPhone && (absDpr !== null)) {
    // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
    if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
      dpr = 3;
    } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
      dpr = 2;
    } else {
      dpr = 1;
    }
  } else {
    // 其他设备下，仍旧使用1倍的方案
    // 如果设置了absDpr则使用absDpr
    dpr = absDpr || 1;
  }

  const scale = 1 / dpr;
  rootEl.setAttribute('data-dpr', dpr);
  // eslint-disable-next-line no-nested-ternary
  rootEl.setAttribute('data-device-type', isIPhone ? 'iphone' : (isAndroid ? 'android' : 'other'));
  viewport.name = 'viewport';
  viewport.content = `initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}, user-scalable=no`;
  header.appendChild(viewport);

  try {
    const vMin = doc.createElement('div');
    vMin.style.width = '1px';
    vMin.style.width = '1vmin';
    document.body.appendChild(vMin);
    if (vMin.offsetWidth > 1) {
      document.body.removeChild(vMin);
      rootEl.style.fontSize = '3.125vmin';
      rootEl.style.fontSize = window.getComputedStyle(rootEl, null).fontSize;
      // eslint-disable-next-line eqeqeq
      if (rootEl.style.fontSize.indexOf('px') != -1) return;
    }
  // eslint-disable-next-line no-empty
  } catch (e) {}

  function refreshRem() {
    let width = doc.documentElement.clientWidth;
    const height = doc.documentElement.clientHeight;
    // eslint-disable-next-line eqeqeq
    if (width == 0 || !width) {
      width = rootEl.getBoundingClientRect().width;
    }
    const rem = ((Math.min(width, height) / 320) * 10);
    rootEl.style.fontSize = `${rem}px`;
  }

  win.addEventListener('resize', () => {
    clearTimeout(tid);
    tid = setTimeout(refreshRem, 300);
  }, false);
  win.addEventListener('pageshow', (e) => {
    if (e.persisted) {
      clearTimeout(tid);
      tid = setTimeout(refreshRem, 300);
    }
  }, false);

  refreshRem();
};

// eslint-disable-next-line func-names
that.px2rem = function (px) {
  return px / that.rem();
};

// eslint-disable-next-line func-names
that.rem2px = function (rem) {
  return rem * that.rem();
};

// eslint-disable-next-line func-names
that.rem = function () {
  return parseFloat(window.getComputedStyle(rootEl, null).fontSize, 10);
};

// eslint-disable-next-line func-names
that.currentDpr = function () {
  return rootEl.hasAttribute('data-dpr') ? parseInt(rootEl.hasAttribute('data-dpr'), 10) : devicePixelRatio;
};

// eslint-disable-next-line func-names
that.isAndroid = function () {
  return isAndroid;
};

// eslint-disable-next-line func-names
that.isIPhone = function () {
  return isIPhone;
};

// eslint-disable-next-line func-names
that.getDeviceType = function () {
  // eslint-disable-next-line no-nested-ternary
  return isIPhone ? 'iphone' : (isAndroid ? 'android' : 'other');
};
