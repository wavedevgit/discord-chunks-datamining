/** Chunk was on 384 **/
/** chunk id: 229190, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk28767 = require("./28767.js");

function o(e) {
  let {
    showSecondaryColor: t,
    palette: n,
    onPrimaryColorChange: o,
    onSecondaryColorChange: c
  } = e, u = i.useRef(null);
  return (0, l.Tbt)(u), (0, r.jsxs)("div", {
    className: a.popoutContainer,
    children: [(0, r.jsx)(l.Text, {
      variant: "text-xs/semibold",
      color: "text-default",
      className: a.customColorsHeader,
      children: s.intl.string(s.t.JhNpgy)
    }), (0, r.jsxs)("div", {
      ref: u,
      className: a.colorPickersContainer,
      children: [(0, r.jsxs)("div", {
        className: a.colorColumn,
        children: [(0, r.jsx)("div", {
          className: a.colorSwatch,
          style: {
            backgroundColor: n.primary
          }
        }), (0, r.jsx)(l.Text, {
          variant: "text-xs/medium",
          color: "text-default",
          children: s.intl.string(s.t.C3KTQk)
        }), (0, r.jsx)(l.Z$W, {
          className: a.colorPicker,
          value: n.primary,
          eagerUpdate: true,
          wrapperComponentType: "div",
          showEyeDropper: true,
          onChange: o
        })]
      }), t && (0, r.jsxs)("div", {
        className: a.colorColumn,
        children: [(0, r.jsx)("div", {
          className: a.colorSwatch,
          style: {
            backgroundColor: n.secondary
          }
        }), (0, r.jsx)(l.Text, {
          variant: "text-xs/medium",
          color: "text-default",
          children: s.intl.string(s.t["8elvy6"])
        }), (0, r.jsx)(l.Z$W, {
          className: a.colorPicker,
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
    onSecondaryColorChange: u,
    popoutTargetRef: d
  } = e;
  return (0, r.jsx)(l.yRy, {
    targetElementRef: d,
    renderPopout: () => (0, r.jsx)(o, {
      showSecondaryColor: n,
      palette: a,
      onPrimaryColorChange: c,
      onSecondaryColorChange: u
    }),
    position: "top",
    shouldShow: t,
    onRequestClose: i,
    animation: l.yRy.Animation.TRANSLATE,
    animationPosition: "right",
    children: s
  })
}