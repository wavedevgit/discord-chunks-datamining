/** Chunk was on web.js **/
/** chunk id: 526031, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk255367 = require("./255367.js"),
  Chunk197723 = require("./197723.jsx"),
  Chunk704215 = require("./704215.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk765585 = require("./765585.js"),
  Chunk429467 = require("./429467.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk385255 = require("./385255.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e) {
  let {
    markAsDismissed: t,
    onTryFeature: h
  } = e, {
    analyticsLocations: g
  } = (0, c.ZP)(l.Z.CUSTOM_STATUS_TAGS_COACHMARK), b = () => {
    null == h || h(), t(f.L.TAKE_ACTION), (0, s.ZDy)(async () => {
      let {
        default: e
      } = await n.e("31649").then(n.bind(n, 475613)), t = (0, d.Z)();
      return n => <e{...E(m({}, n), {
        showLabelSelectorNewTooltip: true,
        location: "CustomStatusTagsCoachmark",
        sourceAnalyticsLocations: g,
        prompt: t
      })} />
    })
  };
  return <u.Z hideDismissButton={true} dismissibleContent={o.z.CUSTOM_STATUS_PROMPTS_COACHMARK} tryItText={(0, r.jsx)(s.Text, {
      variant: "text-xs/semibold",
      color: "always-white",
      children: _.intl.string(_.t.RzWDqa)
    })} tryItButtonColor={a.Tt.BRAND} onTryFeature={b} header={(0, r.jsx)(s.X6q, {
      variant: "heading-sm/bold",
      color: "text-primary",
      children: _.intl.string(_.t.jrzHRk)
    })} body={(0, r.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      className: p.body,
      children: _.intl.string(_.t.hA60Ul)
    })} position={"top"} align={"center"} className={p.container} contentClassName={p.content} pointerClassName={p.pointer} dismissIcon={(0, r.jsx)(i.D, {
      size: "xs"
    })} dismissIconClassName={p.dismissIcon} onDismissIconClick={() => t(f.L.USER_DISMISS)} />
}

function y(e) {
  let {
    children: t,
    markAsDismissed: n,
    targetElementRef: i,
    onTryFeature: o,
    positionKey: a
  } = e;
  return <s.yRy targetElementRef={i} onRequestClose={() => n(f.L.INDIRECT_ACTION)} position={"top"} align={"center"} shouldShow={true} animation={s.yRy.Animation.TRANSLATE} positionKey={a} renderPopout={() => (0, r.jsx)(b, {
      markAsDismissed: n,
      onTryFeature: o
    })}>{t}</s.yRy>
}