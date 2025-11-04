/** Chunk was on 91053 **/
/** chunk id: 686468, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk196979 = require("./196979.js");

function O(e) {
  let {
    onClick: t,
    className: n
  } = e, i = c.S6n;
  return (0, r.jsx)(u.Z, {
    iconContainerClassName: a()({
      [j.continueIconContainer]: false
    }),
    icon: (0, r.jsx)(i, {
      size: "custom",
      color: "currentColor",
      className: j.continueIcon,
      height: 20,
      width: 20
    }),
    color: o.Z.unsafe_rawColors.PRIMARY_700.css,
    title: v.intl.string(v.t["jMLfp/"]),
    description: v.intl.string(v.t["Vd/rEX"]),
    onClick: t,
    className: n
  })
}

function C(e) {
  let {
    channel: t
  } = e, {
    participants: n,
    usersInSummary: i
  } = (0, y.Z)(t.id);
  return (0, r.jsxs)("div", {
    className: j.audienceSummary,
    children: [(0, r.jsx)(d.ZP, {
      className: j.summaryItem,
      guildId: t.guild_id,
      users: i,
      size: d.u8.SIZE_16
    }), (0, r.jsx)(c.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: function(e) {
        if (0 === e.length) return "";
        if (1 === e.length) return v.intl.formatToPlainString(v.t["5ULgaQ"], {
          first: e[0].userNick
        });
        if (2 === e.length) return v.intl.formatToPlainString(v.t.BHK0Op, {
          first: e[0].userNick,
          second: e[1].userNick
        });
        let t = e.length - 2;
        return v.intl.formatToPlainString(v.t.T3MT4n, {
          first: e[0].userNick,
          second: e[1].userNick,
          numOthers: t
        })
      }(n)
    })]
  })
}

function I(e) {
  let {
    channel: t,
    onContinueClick: n
  } = e, l = (0, s.e7)([b.Z], () => b.Z.can(_.yP, t), [t]), o = t.guild_id, {
    canCreateGuildEvent: d
  } = (0, g.XJ)(t), u = (0, x.Z)(t.id), y = i.useRef(null);
  return (0, r.jsxs)("div", {
    className: j.container,
    ref: y,
    children: [(0, r.jsx)(m.Z, {
      eventTargetRef: y
    }), (0, r.jsxs)("div", {
      className: j.content,
      children: [(0, r.jsxs)("div", {
        className: j.headerContainer,
        children: [(0, r.jsx)(c.Heading, {
          className: j.__invalid_title,
          variant: "heading-xxl/normal",
          children: v.intl.string(v.t.QGnDLs)
        }), (0, r.jsx)(c.Text, {
          tag: "div",
          className: j.subtitle,
          variant: "heading-lg/normal",
          children: v.intl.string(v.t.djfK36)
        })]
      }), u ? null : (0, r.jsx)(p.Z, {
        channelId: t.id
      }), l ? (0, r.jsx)(f.Z, {
        className: j.eventPrompt,
        channel: t
      }) : null, d ? (0, r.jsx)(h.Z, {
        className: j.eventPrompt,
        guildId: o
      }) : null, l ? (0, r.jsx)(O, {
        className: a()({
          [j.eventPrompt]: true
        }),
        onClick: n
      }) : null, (0, r.jsx)(C, {
        channel: t
      })]
    })]
  })
}