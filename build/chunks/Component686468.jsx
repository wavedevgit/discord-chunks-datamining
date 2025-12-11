/** Chunk was on 41700 **/
/** chunk id: 686468, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk884338 = require("./884338.jsx"),
  Chunk688641 = require("./688641.jsx"),
  Chunk596449 = require("./596449.jsx"),
  Chunk459502 = require("./459502.jsx"),
  Chunk856691 = require("./856691.jsx"),
  Chunk357156 = require("./357156.js"),
  Chunk546247 = require("./546247.jsx"),
  Chunk496675 = require("./496675.js"),
  Chunk146085 = require("./146085.js"),
  Chunk979339 = require("./979339.js"),
  Chunk643632 = require("./643632.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk266267 = require("./266267.js");

function C(e) {
  let {
    onClick: t,
    className: n
  } = e, i = c.S6n;
  return (0, r.jsx)(u.Z, {
    iconContainerClassName: a()({
      [v.continueIconContainer]: false
    }),
    icon: (0, r.jsx)(i, {
      size: "custom",
      color: "currentColor",
      className: v.continueIcon,
      height: 20,
      width: 20
    }),
    color: o.Z.unsafe_rawColors.PRIMARY_700.css,
    title: x.intl.string(x.t["jMLfp/"]),
    description: x.intl.string(x.t["Vd/rEX"]),
    onClick: t,
    className: n
  })
}

function I(e) {
  let {
    channel: t
  } = e, {
    participants: n,
    usersInSummary: i
  } = (0, O.Z)(t.id);
  return (0, r.jsxs)("div", {
    className: v.audienceSummary,
    children: [(0, r.jsx)(d.ZP, {
      className: v.summaryItem,
      guildId: t.guild_id,
      users: i,
      size: d.u8.SIZE_16
    }), (0, r.jsx)(c.Text, {
      variant: "text-sm/normal",
      color: "text-default",
      children: function(e) {
        if (0 === e.length) return "";
        if (1 === e.length) return x.intl.formatToPlainString(x.t["5ULgaQ"], {
          first: e[0].userNick
        });
        if (2 === e.length) return x.intl.formatToPlainString(x.t.BHK0Op, {
          first: e[0].userNick,
          second: e[1].userNick
        });
        let t = e.length - 2;
        return x.intl.formatToPlainString(x.t.T3MT4n, {
          first: e[0].userNick,
          second: e[1].userNick,
          numOthers: t
        })
      }(n)
    })]
  })
}

function _(e) {
  let {
    channel: t,
    onContinueClick: n
  } = e, l = (0, s.e7)([b.Z], () => b.Z.can(y.yP, t), [t]), o = t.guild_id, {
    canCreateGuildEvent: d
  } = (0, g.XJ)(t), u = (0, j.Z)(t.id), O = i.useRef(null);
  return (0, r.jsxs)("div", {
    className: v.container,
    ref: O,
    children: [(0, r.jsx)(m.Z, {
      eventTargetRef: O
    }), (0, r.jsxs)("div", {
      className: v.content,
      children: [(0, r.jsxs)("div", {
        className: v.headerContainer,
        children: [(0, r.jsx)(c.Heading, {
          className: v.__invalid_title,
          variant: "heading-xxl/normal",
          children: x.intl.string(x.t.QGnDLs)
        }), (0, r.jsx)(c.Text, {
          tag: "div",
          className: v.subtitle,
          variant: "heading-lg/normal",
          children: x.intl.string(x.t.djfK36)
        })]
      }), u ? null : (0, r.jsx)(h.Z, {
        channelId: t.id,
        showDismiss: false
      }), l ? (0, r.jsx)(f.Z, {
        className: v.eventPrompt,
        channel: t
      }) : null, d ? (0, r.jsx)(p.Z, {
        className: v.eventPrompt,
        guildId: o
      }) : null, l ? (0, r.jsx)(C, {
        className: a()({
          [v.eventPrompt]: true
        }),
        onClick: n
      }) : null, (0, r.jsx)(I, {
        channel: t
      })]
    })]
  })
}