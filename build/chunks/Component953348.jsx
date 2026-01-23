/** Chunk was on 47841 **/
/** chunk id: 953348, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk872430 = require("./872430.js");

function o(e) {
  let {
    showSecondaryColor: t,
    palette: n,
    onPrimaryColorChange: o,
    onSecondaryColorChange: c
  } = e, d = i.useRef(null);
  return (0, l.tjt)(d), (0, r.jsxs)("div", {
    className: a.jC,
    children: [(0, r.jsx)(l.Text, {
      variant: "text-xs/semibold",
      color: "text-default",
      className: a.Fb,
      children: s.intl.string(s.t.JhNpgy)
    }), (0, r.jsxs)("div", {
      ref: d,
      className: a.Kf,
      children: [(0, r.jsxs)("div", {
        className: a.sg,
        children: [(0, r.jsx)("div", {
          className: a.oP,
          style: {
            backgroundColor: n.primary
          }
        }), (0, r.jsx)(l.Text, {
          variant: "text-xs/medium",
          color: "text-default",
          children: s.intl.string(s.t.C3KTQk)
        }), (0, r.jsx)(l.VNw, {
          className: a.Ei,
          value: n.primary,
          eagerUpdate: true,
          wrapperComponentType: "div",
          showEyeDropper: true,
          onChange: o
        })]
      }), t && (0, r.jsxs)("div", {
        className: a.sg,
        children: [(0, r.jsx)("div", {
          className: a.oP,
          style: {
            backgroundColor: n.secondary
          }
        }), (0, r.jsx)(l.Text, {
          variant: "text-xs/medium",
          color: "text-default",
          children: s.intl.string(s.t["8elvy6"])
        }), (0, r.jsx)(l.VNw, {
          className: a.Ei,
          value: n.secondary,
          eagerUpdate: true,
          wrapperComponentType: "div",
          showEyeDropper: true,
          onChange: c
        })]
      })]
    })]
  })
}

function c(e) {
  let {
    shouldShow: t,
    showSecondaryColor: n,
    onRequestClose: i,
    children: s,
    palette: a,
    onPrimaryColorChange: c,
    onSecondaryColorChange: d,
    popoutTargetRef: u
  } = e;
  return (0, r.jsx)(l.YNO, {
    targetElementRef: u,
    renderPopout: () => (0, r.jsx)(o, {
      showSecondaryColor: n,
      palette: a,
      onPrimaryColorChange: c,
      onSecondaryColorChange: d
    }),
    position: "top",
    shouldShow: t,
    onRequestClose: i,
    animation: l.YNO.Animation.TRANSLATE,
    animationPosition: "right",
    children: s
  })
}