/** Chunk was on 1272 **/
/** chunk id: 81471, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk905405 = require("./905405.js"),
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
  Chunk161414 = require("./161414.js"),
  Chunk430864 = require("./430864.js");
let I = Chunk473749.memo(function(e) {
  let {
    channel: t
  } = e, {
    loaded: n,
    error: l,
    message: I
  } = (0, _.a)(t), C = (0, c.p)(), {
    isBlocked: S,
    isIgnored: T
  } = (0, s.cj)([m.Z], () => ({
    isBlocked: null != I && m.Z.isBlockedForMessage(I),
    isIgnored: null != I && m.Z.isIgnoredForMessage(I)
  }), [I]), N = (0, s.e7)([g.Z], () => g.Z.can(b.Plq.MANAGE_MESSAGES, t)), j = h.cC.useSetting(), {
    content: P
  } = i.useMemo(() => (null == I ? true : I.content) != null && "" !== I.content ? (0, d.ZP)(I, {
    formatInline: true,
    noStyleAndInteraction: true,
    shouldFilterKeywords: C
  }) : {
    content: null
  }, [I, C]), x = null;
  if (l) x = (0, r.jsx)(o.Text, {
    className: y.messageReplacement,
    variant: "text-sm/normal",
    color: "text-muted",
    children: O.intl.string(O.t.BZHld2)
  });
  else if (n)
    if (null != I && S) x = (0, r.jsx)(o.Text, {
      className: y.messageReplacement,
      variant: "text-sm/normal",
      color: "text-muted",
      children: O.intl.string(O.t["WPe+xL"])
    });
    else if (null != I && T) x = (0, r.jsx)(o.Text, {
    className: y.messageReplacement,
    variant: "text-sm/normal",
    color: "text-muted",
    children: O.intl.string(O.t.uxrh1O)
  });
  else if (null != I) {
    let {
      contentPlaceholder: e,
      renderedContent: t
    } = (0, p.f)(I, P, S, T, a()(y.messageContent, v.inlineFormat), {
      leadingIconClass: y.messageContentIcon,
      trailingIconClass: y.messageContentIcon,
      iconSize: E.WW
    });
    x = null != t ? (0, r.jsx)(o.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      className: y.messageContent,
      children: t
    }) : (0, r.jsx)(o.Text, {
      tag: "span",
      variant: "text-sm/normal",
      color: "text-muted",
      className: y.messageReplacement,
      children: e
    })
  } else x = (0, r.jsx)(o.Text, {
    className: y.messageReplacement,
    variant: "text-sm/normal",
    color: "text-muted",
    children: O.intl.string(O.t["0KfDxM"])
  });
  else x = null;
  return (0, r.jsx)(f.aQ.Provider, {
    value: (0, u.Z)(j, N),
    children: (0, r.jsx)(o.Rny, {
      className: y.messageFocusBlock,
      children: x
    })
  })
})