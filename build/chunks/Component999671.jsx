/** Chunk was on 10023 **/
/** chunk id: 999671, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk235820 = require("./235820.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk455199 = require("./455199.js");
require("./288552.jsx");
var Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk629775 = require("./629775.js");

function f(e) {
  let {
    closePopout: t,
    onSelect: n
  } = e, i = (0, l.e7)([s.Z, c.Z], () => s.Z.getChannel(c.Z.getChannelId())), {
    everyoneFilter: h,
    roleFilter: f,
    guildFilter: g
  } = (0, l.cj)([u.ZP], () => {
    let {
      everyoneFilter: e,
      roleFilter: t,
      guildFilter: n
    } = u.ZP;
    return {
      everyoneFilter: e,
      roleFilter: t,
      guildFilter: n
    }
  });
  return (0, r.jsxs)(o.v2r, {
    navId: "mentions-filter",
    "aria-label": p.intl.string(p.t.pEasFX),
    onClose: t,
    onSelect: n,
    children: [(0, r.jsx)(o.S89, {
      id: "Everyone",
      label: p.intl.string(p.t.cdyUsV),
      action: function() {
        a.Z.setGuildFilter({
          everyoneFilter: !h
        })
      },
      checked: h
    }), (0, r.jsx)(o.S89, {
      id: "Roles",
      label: p.intl.string(p.t.lZejCq),
      action: function() {
        a.Z.setGuildFilter({
          roleFilter: !f
        })
      },
      checked: f
    }), null == i || i.isPrivate() ? null : (0, r.jsx)(o.S89, {
      id: "All Servers",
      label: p.intl.string(p.t.GWMA6s),
      action: function() {
        a.Z.setGuildFilter({
          guildFilter: g === d.NgX.THIS_SERVER ? d.NgX.ALL_SERVERS : d.NgX.THIS_SERVER
        })
      },
      checked: g === d.NgX.ALL_SERVERS
    })]
  })
}

function g() {
  let e = Chunk473749.useRef(null);
  return (0, Chunk54381.jsx)(Chunk481060.yRy, {
    targetElementRef: module,
    align: "right",
    animation: Chunk481060.yRy.Animation.NONE,
    position: "bottom",
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(f, {
        closePopout: t
      })
    },
    children: t => {
      let {
        onClick: n
      } = t;
      return (0, r.jsx)(o.M0o, {
        ref: e,
        tooltip: p.intl.string(p.t.pEasFX),
        color: o.YX$.TERTIARY,
        icon: (0, r.jsx)(o.gXV, {
          size: "xs",
          color: "currentColor"
        }),
        className: h.controlButton,
        onClick: n
      })
    }
  })
}