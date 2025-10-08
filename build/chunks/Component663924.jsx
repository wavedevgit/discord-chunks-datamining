/** Chunk was on 42300 **/
/** chunk id: 663924, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk374470 = require("./374470.js"),
  Chunk952265 = require("./952265.js"),
  Chunk481060 = require("./481060.js"),
  Chunk896449 = require("./896449.jsx"),
  Chunk314910 = require("./314910.jsx"),
  Chunk728285 = require("./728285.jsx"),
  Chunk574254 = require("./574254.js"),
  Chunk585483 = require("./585483.js"),
  Chunk499254 = require("./499254.js"),
  Chunk827498 = require("./827498.js"),
  Chunk421591 = require("./421591.jsx"),
  Chunk496977 = require("./496977.js"),
  Chunk314734 = require("./314734.js"),
  Chunk981631 = require("./981631.js"),
  Chunk149203 = require("./149203.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk679862 = require("./679862.js");
let x = {
  height: Chunk314734.lv
};

function O() {
  Chunk499254.yT(Chunk827498.ti.DISMISSED)
}

function j(e) {
  let {
    channel: t,
    closeOnModalOuterClick: n = false,
    parentModalKey: c
  } = e, h = r.useRef(null), {
    renderWindow: _,
    windowDispatch: v
  } = r.useContext(u.ZP), x = null != c, j = (0, a.Jw)(null != c ? c : ""), E = r.useCallback(e => {
    var t;
    if (!x && (0, a.$s)() || x && !(j && n) || d.Z.isOpen() || e.defaultPrevented) return;
    let {
      target: i
    } = e;
    if ((0, l.kK)(i) && null != i.closest("." + b.Jh)) return;
    for (;
      (0, l.kK)(i);) {
      if (i === h.current) return;
      if (i.classList.contains(b.t4) || i.classList.contains(b.Id)) return void e.preventDefault();
      if (i.classList.contains(b.NN)) return;
      let t = [y.cZ, s.N];
      if (i.classList.contains(b.I4) || t.includes(i.id)) return;
      i = i.parentNode
    }
    O();
    let r = null == (t = (0, l.uB)(e)) ? true : t.activeElement;
    (null == r || "BODY" === r.tagName) && p.S.dispatchToLastSubscribed(C.CkL.TEXTAREA_FOCUS)
  }, [n, j, x]);
  r.useLayoutEffect(() => (_.addEventListener("mousedown", E), _.addEventListener("contextmenu", E), v.subscribe(C.CkL.POPOUT_CLOSE, O), () => {
    _.removeEventListener("mousedown", E), _.removeEventListener("contextmenu", E), v.unsubscribe(C.CkL.POPOUT_CLOSE, O)
  }), [E, _, v]), (0, o.Tbt)(h), r.useEffect(() => {
    (!x && (0, a.$s)() || x && !j) && O()
  }, [j, x]);
  let S = (0, g.Z)();
  return (0, i.jsx)(m.Z, {
    ref: h,
    context: {
      channel: t,
      type: "channel"
    },
    entrypoint: f._b.TEXT,
    initHistory: S
  })
}
let E = Chunk647438.memo(function(e) {
  var {
    positionTargetRef: t
  } = e, n = function(e, t) {
    if (null == e) return {};
    var n, i, r = function(e, t) {
      if (null == e) return {};
      var n, i, r = {},
        l = Object.keys(e);
      for (i = 0; i < l.length; i++) n = l[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
  }(e, ["positionTargetRef"]);
  return (0, i.jsx)("span", {
    style: b.u$,
    children: (0, i.jsx)(c.W5, {
      className: v.positionLayer,
      targetRef: t,
      position: "top",
      align: "right",
      spacing: 24,
      autoInvert: true,
      clickTrap: true,
      children: e => {
        let {
          isPositioned: t
        } = e;
        return (0, i.jsx)("section", {
          className: v.positionContainer,
          role: "dialog",
          style: x,
          "aria-label": _.intl.string(_.t["3CNGLC"]),
          children: t && (0, i.jsx)(j, function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                i = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), i.forEach(function(t) {
                var i;
                i = n[t], t in e ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = i
              })
            }
            return e
          }({}, n))
        })
      }
    })
  })
})