/** Chunk was on 24231 **/
/** chunk id: 540186, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./953529.js"), require("./539854.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk311888 = require("./311888.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk5192 = require("./5192.js"),
  Chunk431328 = require("./431328.js"),
  Chunk501655 = require("./501655.js"),
  Chunk659972 = require("./659972.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk765305 = require("./765305.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk158170 = require("./158170.js");

function f(e) {
  let {
    icon: t
  } = e;
  return (0, r.jsx)("div", {
    className: p.iconContainer,
    children: (0, r.jsx)(t, {
      color: "currentColor",
      size: "md"
    })
  })
}

function v(e) {
  let {
    icon: t,
    text: n
  } = e;
  return (0, r.jsxs)("div", {
    className: p.listItemContainer,
    children: [(0, r.jsx)("div", {
      className: p.listItemIconContainer,
      children: t
    }), (0, r.jsx)(a.Text, {
      className: p.listItemText,
      variant: "text-md/normal",
      color: "header-secondary",
      children: n
    })]
  })
}

function _(e) {
  var t;
  let {
    guild: n,
    channel: l,
    stageData: a
  } = e, s = (0, i.e7)([o.default], () => o.default.getCurrentUser(), []), c = {
    id: "1337",
    guild_id: n.id,
    channel_id: l.id,
    topic: a.topic,
    description: a.description,
    privacy_level: null != (t = a.privacyLevel) ? t : g.j8.PUBLIC
  }, h = (0, u.w8)(l.id, x.pV.SPEAKER), b = (0, u.Rk)(l.id, x.pV.AUDIENCE), f = h.slice(0, 5);
  return null == f.find(e => {
    var t;
    return (null == (t = e.user) ? true : t.id) === (null == s ? true : s.id)
  }) && f.push({
    user: s,
    userNick: d.ZP.getName(n.id, l.id, s)
  }), (0, r.jsx)("div", {
    className: p.previewCardContainer,
    children: (0, r.jsx)("div", {
      className: p.previewCard,
      children: (0, r.jsx)(m.Z, {
        guild: n,
        stageInstance: c,
        showGuildPopout: false,
        setShowGuildPopout: () => {},
        source: m.k.UNSPECIFIED,
        speakers: f,
        speakerCount: h.length,
        audienceCount: Math.max(1337, b),
        channelName: l.name
      })
    })
  })
}

function j(e) {
  let {
    guild: t,
    channel: n,
    stageData: i,
    headerId: o,
    loading: d,
    onNext: u,
    onCancel: x,
    onBack: m
  } = e;
  return null == t || null == n || null == i ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(_, {
      guild: t,
      channel: n,
      stageData: i
    }), (0, r.jsxs)(a.hzk, {
      className: p.container,
      children: [(0, r.jsxs)("div", {
        className: p.header,
        children: [(0, r.jsx)(a.X6q, {
          id: o,
          className: p.__invalid_title,
          variant: "heading-xl/semibold",
          children: b.intl.string(b.t.GXpXTE)
        }), (0, r.jsx)(a.Text, {
          className: p.subtitle,
          color: "header-secondary",
          variant: "text-sm/normal",
          children: b.intl.string(b.t.JaYMvL)
        })]
      }), (0, r.jsxs)("div", {
        className: p.__invalid_list,
        children: [(0, r.jsx)(v, {
          icon: (0, r.jsx)(f, {
            icon: a.Jmo
          }),
          text: b.intl.string(b.t.u6oOcn)
        }), (0, r.jsx)(v, {
          icon: (0, r.jsx)(f, {
            icon: a.iFz
          }),
          text: b.intl.string(b.t.QC8ymZ)
        }), (0, r.jsx)(v, {
          icon: (0, r.jsx)(f, {
            icon: a.vdY
          }),
          text: b.intl.string(b.t.mgGOT0)
        }), (0, r.jsx)(v, {
          icon: (0, r.jsx)(s.Z, {
            className: p.badgeIconBackground,
            foreground: p.badgeIconForeground,
            width: 40,
            height: 40
          }),
          text: b.intl.format(b.t.qLmNLC, {
            articleURL: c.Z.getArticleURL(h.BhN.STAGE_CHANNEL_GUIDELINES)
          })
        })]
      })]
    }), (0, r.jsxs)(a.mzw, {
      children: [(0, r.jsx)(a.zxk, {
        variant: "active",
        text: b.intl.string(b.t.s8mM8P),
        onClick: u,
        loading: d
      }), (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: p.cancelButton,
        children: (0, r.jsx)(a.zxk, {
          variant: "secondary",
          text: b.intl.string(b.t["ETE/oK"]),
          onClick: x
        })
      }), (0, r.jsx)(l.zx, {
        look: l.zx.Looks.LINK,
        color: l.zx.Colors.LINK,
        className: p.backButton,
        onClick: m,
        size: l.zx.Sizes.MIN,
        children: b.intl.string(b.t["13/7kZ"])
      })]
    })]
  })
}