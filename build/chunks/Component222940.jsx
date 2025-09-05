/** Chunk was on 1272 **/
/** chunk id: 222940, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk399606 = require("./399606.js"),
  Chunk846519 = require("./846519.js"),
  Chunk481060 = require("./481060.js"),
  Chunk317632 = require("./317632.js"),
  Chunk174767 = require("./174767.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk873158 = require("./873158.js");

function f(e) {
  let {
    inboxIconRef: t,
    recentsPopoutShown: n
  } = e, [f, h] = i.useState(false), g = (0, l.e7)([s.Z], () => s.Z.getLastUnseenInvite()), m = (0, l.e7)([u.default], () => null != g ? u.default.getUser(g.inviter_id) : null);
  return (i.useEffect(() => {
    n && h(false)
  }, [n]), i.useEffect(() => {
    if (null == g) return void h(false);
    (0, c.Br)(g), h(true);
    let e = new a.V7;
    return e.start(5e3, () => {
      h(false)
    }), () => {
      e.stop()
    }
  }, [g]), f && null != g && null != m) ? (0, r.jsxs)(o.Cys, {
    tooltipClassName: p.tooltip,
    tooltipContentClassName: p.tooltipContent,
    targetElementRef: t,
    position: "bottom",
    color: o.FGA.PRIMARY,
    children: [(0, r.jsxs)("div", {
      className: p.iconContainer,
      children: [(0, r.jsx)("img", {
        className: p.inviteImage,
        src: g.application_asset,
        alt: "Game Invite"
      }), (0, r.jsx)("div", {
        className: p.offsetAvatarContainer,
        children: (0, r.jsx)(o.qEK, {
          "aria-label": "Inviter",
          className: p.inviterImage,
          src: m.getAvatarURL(null, 24),
          size: o.EFr.SIZE_24
        })
      })]
    }), (0, r.jsxs)("div", {
      className: p.titleContainer,
      children: [(0, r.jsx)(o.Text, {
        className: p.__invalid_title,
        variant: "text-xs/semibold",
        children: d.intl.format(d.t["8gTZ8v"], {
          username: m.username
        })
      }), (0, r.jsx)(o.Text, {
        className: p.__invalid_subtitle,
        variant: "text-xxs/medium",
        children: g.application_name
      })]
    })]
  }) : null
}