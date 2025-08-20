/** Chunk was on 5665 **/
/** chunk id: 663924, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
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
  Chunk5967 = require("./5967.js"),
  Chunk499254 = require("./499254.js"),
  Chunk827498 = require("./827498.js"),
  Chunk421591 = require("./421591.jsx"),
  Chunk496977 = require("./496977.js"),
  Chunk314734 = require("./314734.js"),
  Chunk981631 = require("./981631.js"),
  Chunk149203 = require("./149203.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk681524 = require("./681524.js");
let O = {
  height: Chunk314734.lv
};

function j() {
  Chunk499254.yT(Chunk827498.ti.DISMISSED)
}

function E(e) {
  let {
    channel: t,
    closeOnModalOuterClick: n = false,
    parentModalKey: u
  } = e, f = i.useRef(null), {
    renderWindow: x,
    windowDispatch: v
  } = i.useContext(s.ZP), O = null != u, E = (0, a.Jw)(null != u ? u : ""), S = i.useCallback(e => {
    var t;
    if (!O && (0, a.$s)() || O && !(E && n) || d.Z.isOpen() || e.defaultPrevented) return;
    let {
      target: r
    } = e;
    if ((0, l.k)(r) && null != r.closest("." + y.Jh)) return;
    for (;
      (0, l.k)(r);) {
      if (r === f.current) return;
      if (r.classList.contains(y.t4) || r.classList.contains(y.Id)) return void e.preventDefault();
      if (r.classList.contains(y.NN)) return;
      let t = [C.cZ, c.N];
      if (r.classList.contains(y.I4) || t.includes(r.id)) return;
      r = r.parentNode
    }
    j();
    let i = null == (t = (0, h.uB)(e)) ? true : t.activeElement;
    (null == i || "BODY" === i.tagName) && p.S.dispatchToLastSubscribed(_.CkL.TEXTAREA_FOCUS)
  }, [n, E, O]);
  i.useLayoutEffect(() => (x.addEventListener("mousedown", S), x.addEventListener("contextmenu", S), v.subscribe(_.CkL.POPOUT_CLOSE, j), () => {
    x.removeEventListener("mousedown", S), x.removeEventListener("contextmenu", S), v.unsubscribe(_.CkL.POPOUT_CLOSE, j)
  }), [S, x, v]), (0, o.Tbt)(f), i.useEffect(() => {
    (!O && (0, a.$s)() || O && !E) && j()
  }, [E, O]);
  let P = (0, b.Z)();
  return (0, r.jsx)(g.Z, {
    ref: f,
    context: {
      channel: t,
      type: "channel"
    },
    entrypoint: m._b.TEXT,
    initHistory: P
  })
}
let S = Chunk647438.memo(function(e) {
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
    style: y.u$,
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
          style: O,
          "aria-label": x.intl.string(x.t["3CNGLC"]),
          children: t && (0, r.jsx)(E, function(e) {
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