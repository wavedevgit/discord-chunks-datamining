/** Chunk was on 1272 **/
/** chunk id: 81471, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk255269 = require("./255269.js"),
  Chunk937889 = require("./937889.js"),
  Chunk267128 = require("./267128.jsx"),
  Chunk411405 = require("./411405.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk868807 = require("./868807.js"),
  Chunk981631 = require("./981631.js"),
  Chunk217702 = require("./217702.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk326730 = require("./326730.js"),
  Chunk960324 = require("./960324.js");
let y = Chunk473749.memo(function(e) {
  let {
    channel: t
  } = e, {
    loaded: n,
    error: l,
    message: y
  } = (0, h.a)(t), {
    isBlocked: I,
    isIgnored: C
  } = (0, o.cj)([m.Z], () => ({
    isBlocked: null != y && m.Z.isBlockedForMessage(y),
    isIgnored: null != y && m.Z.isIgnoredForMessage(y)
  }), [y]), S = (0, o.e7)([g.Z], () => g.Z.can(b.Plq.MANAGE_MESSAGES, t)), T = f.cC.useSetting(), {
    content: N
  } = i.useMemo(() => (null == y ? true : y.content) != null && "" !== y.content ? (0, u.ZP)(y, {
    formatInline: true,
    noStyleAndInteraction: true
  }) : {
    content: null
  }, [y]), j = null;
  if (l) j = (0, r.jsx)(s.Text, {
    className: O.messageReplacement,
    variant: "text-sm/normal",
    color: "text-muted",
    children: E.intl.string(E.t.BZHld2)
  });
  else if (n)
    if (null != y && I) j = (0, r.jsx)(s.Text, {
      className: O.messageReplacement,
      variant: "text-sm/normal",
      color: "text-muted",
      children: E.intl.string(E.t["WPe+xL"])
    });
    else if (null != y && C) j = (0, r.jsx)(s.Text, {
    className: O.messageReplacement,
    variant: "text-sm/normal",
    color: "text-muted",
    children: E.intl.string(E.t.uxrh1O)
  });
  else if (null != y) {
    let {
      contentPlaceholder: e,
      renderedContent: t
    } = (0, d.f)(y, N, I, C, a()(O.messageContent, v.inlineFormat), {
      leadingIconClass: O.messageContentIcon,
      trailingIconClass: O.messageContentIcon,
      iconSize: _.WW
    });
    j = null != t ? (0, r.jsx)(s.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      className: O.messageContent,
      children: t
    }) : (0, r.jsx)(s.Text, {
      tag: "span",
      variant: "text-sm/normal",
      color: "text-muted",
      className: O.messageReplacement,
      children: e
    })
  } else j = (0, r.jsx)(s.Text, {
    className: O.messageReplacement,
    variant: "text-sm/normal",
    color: "text-muted",
    children: E.intl.string(E.t["0KfDxM"])
  });
  else j = null;
  return (0, r.jsx)(p.aQ.Provider, {
    value: (0, c.Z)(T, S),
    children: (0, r.jsx)(s.Rny, {
      className: O.messageFocusBlock,
      children: j
    })
  })
})