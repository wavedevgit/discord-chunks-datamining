/** Chunk was on web.js **/
/** chunk id: 321051, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk697426 = require("./697426.js"),
  Chunk603074 = require("./603074.js"),
  Chunk388032 = require("./388032.js"),
  Chunk10123 = require("./10123.js");
let d = [54, 8, 8, 8];

function f(e) {
  let {
    onSelect: t,
    sound: n
  } = e, [f, _] = i.useState(false), p = i.useRef(null);

  function h(e) {
    _(false), null == t || t(e)
  }
  let m = e => <div className={u.customGiftHeader}>{<div className={u.__invalid_customGiftHeaderText}>{<a.Text variant={"text-md/bold"}>{c.intl.string(c.t.aThJz8)}</a.Text>}{<a.Text variant={"text-sm/normal"}>{c.intl.string(c.t.stGFAw)}</a.Text>}</div>}{<div className={u.searchAndSound}>{e}</div>}</div>;
  return <a.yRy targetElementRef={p} shouldShow={f} position={"bottom"} align={"left"} onRequestClose={() => _(false)} renderPopout={e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(a.VqE, {
        children: (0, r.jsx)(l.Z, {
          suppressPlaySound: true,
          shouldShowUpsell: false,
          guildId: null,
          channel: null,
          onClose: t,
          onSelect: h,
          analyticsSource: "gift soundboard",
          soundButtonOverlay: s.Pb.ADD,
          listPadding: d,
          renderHeader: m,
          defaultSoundsOnly: true
        })
      })
    }}>{() => (0, r.jsx)(a.P3F, {
      className: u.container,
      onClick: () => _(true),
      innerRef: p,
      children: null == n ? (0, r.jsxs)("div", {
        className: u.contentContainer,
        children: [(0, r.jsx)(a.KY1, {
          size: "custom",
          color: o.Z.colors.WHITE,
          className: u.soundIcon,
          width: 14,
          height: 14
        }), (0, r.jsx)(a.Text, {
          className: u.text,
          variant: "text-sm/semibold",
          lineClamp: 1,
          children: c.intl.string(c.t.aThJz8)
        })]
      }) : (0, r.jsxs)("div", {
        className: u.contentContainer,
        children: [(0, r.jsx)(a.Text, {
          className: u.textSelected,
          variant: "text-sm/semibold",
          children: n.emojiName
        }), (0, r.jsx)(a.Text, {
          className: u.text,
          variant: "text-sm/semibold",
          lineClamp: 1,
          children: n.name
        })]
      })
    })}</a.yRy>
}