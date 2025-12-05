/** Chunk was on 64271 **/
/** chunk id: 326838, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk782568 = require("./782568.js"),
  Chunk104505 = require("./104505.js"),
  Chunk317632 = require("./317632.js"),
  Chunk174767 = require("./174767.js"),
  Chunk594174 = require("./594174.js"),
  Chunk55935 = require("./55935.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk313227 = require("./313227.js");

function y(e) {
  let {
    invite: t,
    expired: n
  } = e, l = (0, a.e7)([g.default], () => {
    var e, n;
    return null != (n = null == (e = g.default.getUser(t.inviter_id)) ? true : e.username) ? n : ""
  }), s = (0, m.vc)(o()(t.created_at), "LT"), c = i.useRef(null), {
    isHoveringOrFocusing: d
  } = (0, f.Z)(c);
  return i.useEffect(() => {
    n || (0, p.Br)(t)
  }, [t, n]), (0, r.jsxs)("div", {
    className: _.container,
    ref: c,
    children: [(0, r.jsxs)("div", {
      className: _.primaryRow,
      children: [(0, r.jsx)("img", {
        className: _.inviteImage,
        src: t.application_asset,
        alt: "Game Invite"
      }), (0, r.jsx)(u.Text, {
        className: _.title,
        variant: "text-md/semibold",
        color: "interactive-active",
        children: b.intl.format(b.t.vtUO3Y, {
          username: l
        })
      }), (0, r.jsxs)("div", {
        className: _.buttonContainer,
        children: [(0, r.jsx)(O, {
          expired: n,
          invite: t,
          isHoveringInvite: d
        }), (0, r.jsx)(u.M0o, {
          className: _.deleteButton,
          tooltip: b.intl.string(b.t.oyYWHE),
          color: u.YX$.SECONDARY,
          icon: (0, r.jsx)(u.XHJ, {
            size: "xs"
          }),
          onClick: () => {
            (0, p.UF)(t)
          }
        })]
      })]
    }), (0, r.jsx)("div", {
      className: _.divider
    }), (0, r.jsxs)("div", {
      className: _.secondaryRow,
      children: [(0, r.jsxs)(u.Text, {
        variant: "text-xs/medium",
        className: _.subtitle,
        color: "text-muted",
        children: [t.application_name, " \xb7 ", s]
      }), n && (0, r.jsx)("div", {
        className: _.metaContainer,
        children: (0, r.jsx)(u.Text, {
          variant: "text-xxs/semibold",
          className: _.__invalid_metaText,
          color: "text-muted",
          children: b.intl.string(b.t["//8UqT"])
        })
      })]
    })]
  })
}

function O(e) {
  let {
    expired: t,
    invite: n,
    isHoveringInvite: l
  } = e, o = (0, a.e7)([h.Z], () => h.Z.isInviteGameInstalled(n)), f = (0, a.e7)([h.Z], () => h.Z.isInviteJoinable(n)), [g, m] = i.useState(false), y = i.useCallback(async () => {
    m(true);
    try {
      await (0, p.MH)(n)
    } catch (e) {}
    m(false)
  }, [n]), O = i.useCallback(async () => {
    m(true);
    try {
      await (0, p.Ol)(n)
    } catch (e) {}
    m(false)
  }, [n]);
  if (t)
    if (o && l) return (0, r.jsx)(c.zx, {
      className: _.primaryButton,
      color: c.Tt.TRANSPARENT,
      disabled: g,
      size: c.Ph.SMALL,
      onClick: y,
      children: b.intl.string(b.t["s+J8Dl"])
    });
    else return null;
  return o && f ? (0, r.jsx)(c.zx, {
    className: _.primaryButton,
    color: c.Tt.GREEN,
    disabled: g,
    size: c.Ph.SMALL,
    onClick: O,
    children: b.intl.string(b.t["/loN98"])
  }) : null != n.fallback_url ? (0, r.jsx)(c.zx, {
    className: _.primaryButton,
    disabled: g,
    size: c.Ph.SMALL,
    color: c.Tt.TRANSPARENT,
    onClick: () => (0, d.Z)(n.fallback_url),
    children: b.intl.string(b.t["27y8KF"])
  }) : (0, r.jsx)(s.u, {
    text: b.intl.formatToPlainString(b.t.issFLA, {
      gameTitle: n.application_name
    }),
    children: (0, r.jsx)(c.zx, {
      className: _.primaryButton,
      disabled: true,
      size: c.Ph.SMALL,
      color: c.Tt.TRANSPARENT,
      onClick: () => (0, d.Z)(n.fallback_url),
      children: (0, r.jsxs)("div", {
        className: _.launchToJoinContainer,
        children: [(0, r.jsx)(u.Text, {
          variant: "text-xxs/medium",
          className: _.launchToJoinText,
          color: "text-muted",
          children: b.intl.string(b.t.dai1Ow)
        }), (0, r.jsx)(u.d3s, {
          size: "xxs",
          color: u.TVs.colors.TEXT_MUTED.css
        })]
      })
    })
  })
}