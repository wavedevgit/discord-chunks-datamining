/** Chunk was on 88806 **/
/** chunk id: 663924, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk374470 = require("./374470.js"),
  Chunk952265 = require("./952265.js"),
  Chunk481060 = require("./481060.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk896449 = require("./896449.jsx"),
  Chunk314910 = require("./314910.jsx"),
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
  Chunk681524 = require("./681524.js");
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
    parentModalKey: u
  } = e, h = i.useRef(null), {
    renderWindow: _,
    windowDispatch: v
  } = i.useContext(s.ZP), x = null != u, j = (0, a.Jw)(null != u ? u : ""), E = i.useCallback(e => {
    var t;
    if (!x && (0, a.$s)() || x && !(j && n) || d.Z.isOpen() || e.defaultPrevented) return;
    let {
      target: r
    } = e;
    if ((0, l.kK)(r) && null != r.closest("." + b.Jh)) return;
    for (;
      (0, l.kK)(r);) {
      if (r === h.current) return;
      if (r.classList.contains(b.t4) || r.classList.contains(b.Id)) return void e.preventDefault();
      if (r.classList.contains(b.NN)) return;
      let t = [C.cZ, c.N];
      if (r.classList.contains(b.I4) || t.includes(r.id)) return;
      r = r.parentNode
    }
    O();
    let i = null == (t = (0, l.uB)(e)) ? true : t.activeElement;
    (null == i || "BODY" === i.tagName) && p.S.dispatchToLastSubscribed(y.CkL.TEXTAREA_FOCUS)
  }, [n, j, x]);
  i.useLayoutEffect(() => (_.addEventListener("mousedown", E), _.addEventListener("contextmenu", E), v.subscribe(y.CkL.POPOUT_CLOSE, O), () => {
    _.removeEventListener("mousedown", E), _.removeEventListener("contextmenu", E), v.unsubscribe(y.CkL.POPOUT_CLOSE, O)
  }), [E, _, v]), (0, o.Tbt)(h), i.useEffect(() => {
    (!x && (0, a.$s)() || x && !j) && O()
  }, [j, x]);
  let S = (0, g.Z)();
  return (0, r.jsx)(m.Z, {
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
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["positionTargetRef"]);
  return (0, r.jsx)("span", {
    style: b.u$,
    children: (0, r.jsx)(u.W5, {
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
        return (0, r.jsx)("section", {
          className: v.positionContainer,
          role: "dialog",
          style: x,
          "aria-label": _.intl.string(_.t["3CNGLC"]),
          children: t && (0, r.jsx)(j, function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), r.forEach(function(t) {
                var r;
                r = n[t], t in e ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = r
              })
            }
            return e
          }({}, n))
        })
      }
    })
  })
})