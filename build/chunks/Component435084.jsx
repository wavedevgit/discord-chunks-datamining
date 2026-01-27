/** Chunk was on 77870 **/
/** chunk id: 435084, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk378939 = require("./378939.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk187508 = require("./187508.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function f(e) {
  let {
    closePopout: t,
    onSelect: n
  } = e, l = (0, i.bG)([c.A, u.A], () => c.A.getChannel(u.A.getChannelId())), {
    everyoneFilter: s,
    roleFilter: f,
    guildFilter: g
  } = (0, i.cf)([d.Ay], () => {
    let {
      everyoneFilter: e,
      roleFilter: t,
      guildFilter: n
    } = d.Ay;
    return {
      everyoneFilter: e,
      roleFilter: t,
      guildFilter: n
    }
  });
  return (0, r.jsxs)(a.W1t, {
    "data-menu-migrated-auto": true,
    navId: "mentions-filter",
    "aria-label": h.intl.string(h.t.pEasFX),
    onClose: t,
    onSelect: n,
    children: [(0, r.jsx)(a.sLh, {
      id: "Everyone",
      label: h.intl.string(h.t.cdyUsV),
      action: function() {
        o.A.setGuildFilter({
          everyoneFilter: !s
        })
      },
      checked: s
    }), (0, r.jsx)(a.sLh, {
      id: "Roles",
      label: h.intl.string(h.t.lZejCq),
      action: function() {
        o.A.setGuildFilter({
          roleFilter: !f
        })
      },
      checked: f
    }), null == l || l.isPrivate() ? null : (0, r.jsx)(a.sLh, {
      id: "All Servers",
      label: h.intl.string(h.t.GWMA6s),
      action: function() {
        o.A.setGuildFilter({
          guildFilter: g === p.KE7.THIS_SERVER ? p.KE7.ALL_SERVERS : p.KE7.THIS_SERVER
        })
      },
      checked: g === p.KE7.ALL_SERVERS
    })]
  })
}

function g() {
  let e = l.useRef(null);
  return (0, r.jsx)(a.YNO, {
    targetElementRef: e,
    align: "right",
    animation: a.YNO.Animation.NONE,
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
      return (0, r.jsx)(s.m_, {
        text: h.intl.string(h.t.pEasFX),
        targetElementRef: e,
        children: (0, r.jsx)(a.K0, {
          size: "sm",
          variant: "secondary",
          "aria-label": h.intl.string(h.t.pEasFX),
          color: a.o5d.TERTIARY,
          icon: a.RgP,
          onClick: n
        })
      })
    }
  })
}