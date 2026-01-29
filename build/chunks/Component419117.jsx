/** Chunk was on 4670 **/
/** chunk id: 419117, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  A: () => S
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  r = require.n(Chunk284009),
  Chunk199966 = require("./199966.js"),
  Chunk963935 = require("./963935.js"),
  Chunk985018 = require("./985018.jsx");

function d(e) {
  let {
    title: t
  } = e;
  return t
}

function T(e) {
  let {
    useTitle: t,
    settingKey: i,
    formatter: n,
    index: l
  } = e, s = t();
  return "string" == typeof s ? n({
    title: s,
    index: l,
    key: i
  }) : s
}

function c(e) {
  let {
    setting: t,
    formatter: i,
    index: l
  } = e;
  return () => (0, n.jsx)(T, {
    useTitle: t.useTitle,
    settingKey: t.key,
    formatter: i,
    index: l
  }, t.key)
}

function A(e) {
  return e.type === u.Z6.LIST
}

function S(e, t) {
  var i, n;
  let {
    limit: s = 2,
    formatter: T = d
  } = null != t ? t : {};
  r()(s > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
  let {
    visibleDirectory: S,
    accessibleDirectory: _
  } = (0, a._)(), E = null != (i = S.get(e)) ? i : _.get(e);
  r()(null != E && (E.type === u.Z6.ACCORDION || A(E)), "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node");
  let g = A(E) && null != (n = E.collapseAfter) ? n : 0,
    I = E.layout;
  return l.useMemo(() => {
    let e = g,
      t = [];
    for (let i of I)
      if ("useTitle" in i && null != i.useTitle) {
        if (e > 0) {
          e--;
          continue
        }
        t.push({
          key: i.key,
          useTitle: i.useTitle
        })
      } if (0 === t.length) return "";
    let i = Math.min(s, 3);
    if (t.length <= i)
      if (1 === t.length) return o.intl.format(o.t["3H9tCW"], {
        settingOneHook: c({
          setting: t[0],
          formatter: T,
          index: 0
        })
      });
      else if (2 === t.length) return o.intl.format(o.t.MWryo6, {
      settingOneHook: c({
        setting: t[0],
        formatter: T,
        index: 0
      }),
      settingTwoHook: c({
        setting: t[1],
        formatter: T,
        index: 1
      })
    });
    else return o.intl.format(o.t.a00b5G, {
      settingOneHook: c({
        setting: t[0],
        formatter: T,
        index: 0
      }),
      settingTwoHook: c({
        setting: t[1],
        formatter: T,
        index: 1
      }),
      settingThreeHook: c({
        setting: t[2],
        formatter: T,
        index: 2
      })
    });
    return 1 === i ? o.intl.format(o.t.O8vNbS, {
      settingOneHook: c({
        setting: t[0],
        formatter: T,
        index: 0
      })
    }) : 2 === i ? o.intl.format(o.t["acXG/W"], {
      settingOneHook: c({
        setting: t[0],
        formatter: T,
        index: 0
      }),
      settingTwoHook: c({
        setting: t[1],
        formatter: T,
        index: 1
      })
    }) : o.intl.format(o.t["5+ldWc"], {
      settingOneHook: c({
        setting: t[0],
        formatter: T,
        index: 0
      }),
      settingTwoHook: c({
        setting: t[1],
        formatter: T,
        index: 1
      }),
      settingThreeHook: c({
        setting: t[2],
        formatter: T,
        index: 2
      })
    })
  }, [s, g, I, T])
}