/** Chunk was on 44799 **/
/** chunk id: 504392, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
}), require("./539854.js"), require("./388685.js"), require("./361932.js"), require("./187205.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk984370 = require("./984370.jsx"),
  Chunk713081 = require("./713081.js"),
  Chunk905128 = require("./905128.js"),
  Chunk639777 = require("./639777.js"),
  Chunk169010 = require("./169010.js"),
  Chunk27237 = require("./27237.jsx"),
  Chunk426771 = require("./426771.jsx"),
  Chunk51859 = require("./51859.jsx"),
  Chunk184478 = require("./184478.jsx"),
  Chunk877362 = require("./877362.jsx"),
  Chunk460608 = require("./460608.jsx"),
  Chunk279604 = require("./279604.jsx"),
  Chunk385902 = require("./385902.js"),
  Chunk332538 = require("./332538.jsx"),
  Chunk857666 = require("./857666.jsx"),
  Chunk535396 = require("./535396.js"),
  Chunk921944 = require("./921944.js"),
  Chunk93841 = require("./93841.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk782285 = require("./782285.js");
let S = [Chunk535396.Us.LEVEL, Chunk535396.Us.PERK];

function T(e) {
  let {
    guildId: t,
    powerupListingId: i
  } = e;
  o.useEffect(() => {
    (0, p.Sn)(t), (0, p.Fm)(t)
  }, [t]), (0, I.Wj)(t);
  let T = (0, s.e7)([f.Z], () => f.Z.getStateForGuild(t)),
    A = (0, m.Z)(t),
    R = o.useRef(false),
    {
      shouldShow: k,
      modalConfig: L
    } = (0, C.K)(t, "GuildPowerupsOverview"),
    D = null == i && null != L,
    U = [];
  k && D && U.push(a.z.VANITY_URL_POWERUP_ROLLBACK_MODAL);
  let [V, M] = (0, u.US)(U), B = o.useMemo(() => S.reduce((e, t) => {
    let n = null == T ? true : T.powerupCatalog[t];
    if (null == n) return e;
    let r = (0, g.S)(n);
    return e.push({
      type: t,
      listings: r
    }), e
  }, []), [null == T ? true : T.powerupCatalog]), G = B.flatMap(e => e.listings).filter(e => "multiPerk" === e.type).map(e => e.group), W = (0, O.f)(G, t);
  return (o.useEffect(() => {
    if (null != i && !R.current)
      for (let e of B)
        for (let n of e.listings) {
          if (("singleLevel" === n.type || "singlePerk" === n.type) && n.powerup.skuId === i) {
            (0, E.KE)(t, n.powerup), R.current = true;
            return
          }
          if ("multiPerk" === n.type && (n.group === i || n.powerups.some(e => e.skuId === i))) {
            R.current = true;
            let e = W[n.group];
            if (null == e) return;
            e.openModal(n.powerups);
            return
          }
        }
  }, [t, i, B, W]), o.useEffect(() => {
    null != V && null != L && (0, c.ZDy)(async () => {
      let {
        default: e
      } = await n.e("61879").then(n.bind(n, 802426));
      return t => (0, r.jsx)(e, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({
        modalConfig: L,
        markAsDismissed: M
      }, t))
    }, {
      onCloseCallback: () => {
        M(P.L.USER_DISMISS)
      },
      modalKey: "dismissible_content_".concat(V)
    })
  }, [t, V, M, L]), (null == T ? true : T.powerupCatalog) == null) ? null : (0, r.jsxs)("div", {
    className: Z.container,
    children: [(0, r.jsxs)(d.Z, {
      className: Z.toolbar,
      hideSearch: true,
      toolbar: (0, r.jsx)("div", {}),
      children: [(0, r.jsx)(d.Z.Icon, {
        icon: c.$Eu,
        "aria-label": ""
      }), (0, r.jsx)(d.Z.Title, {
        children: N.intl.string(w.default.yv3DJC)
      })]
    }), (0, r.jsxs)("div", {
      className: Z.contentContainer,
      children: [(0, r.jsx)(c.zJl, {
        className: Z.powerupsContainer,
        children: B.map(e => {
          let {
            type: n,
            listings: o
          } = e, {
            title: i,
            description: s
          } = function(e) {
            switch (e) {
              case y.Us.LEVEL:
                return {
                  title: N.intl.string(w.default["TXY/b2"]), description: N.intl.string(w.default.aJv4PD)
                };
              case y.Us.PERK:
                return {
                  title: N.intl.string(w.default.TV3Vm5), description: N.intl.string(w.default.STx9ho)
                }
            }
          }(n), a = n === y.Us.LEVEL ? c.zJl : "div";
          return (0, r.jsxs)("div", {
            className: Z.powerupsSection,
            children: [(0, r.jsxs)("div", {
              className: Z.powerupHorizontalPadding,
              children: [(0, r.jsx)(c.X6q, {
                color: "header-primary",
                variant: "heading-lg/semibold",
                children: i
              }), (0, r.jsx)(c.Text, {
                color: "text-muted",
                variant: "text-sm/medium",
                children: s
              })]
            }), (0, r.jsx)(a, {
              orientation: "horizontal",
              className: l()(Z.powerupContainer, Z.powerupHorizontalPadding, {
                [Z.powerupsLevelContainer]: n === y.Us.LEVEL
              }),
              fade: true,
              children: o.map((e, n) => {
                switch (e.type) {
                  case "singleLevel":
                    var i;
                    return (0, r.jsx)(x.ZP, {
                      guildId: t,
                      index: n,
                      powerup: e.powerup,
                      nextPowerup: null == (i = o[n + 1]) ? true : i.powerup
                    }, "powerup-".concat(e.powerup.skuId));
                  case "singlePerk":
                    return (0, r.jsx)(v.Z, {
                      guildId: t,
                      powerup: e.powerup
                    }, "powerup-".concat(e.powerup.skuId));
                  case "multiPerk":
                    return (0, r.jsx)(_.Z, {
                      guildId: t,
                      group: e.group,
                      powerups: e.powerups
                    }, "powerup-group-".concat(e.group))
                }
              })
            })]
          }, "section-".concat(n))
        })
      }), (0, r.jsxs)("div", {
        className: Z.sidebarContainer,
        children: [A ? (0, r.jsx)(b.Z, {
          guildId: t
        }) : (0, r.jsx)(j.Z, {
          guildId: t
        }), (0, r.jsx)(h.Z, {
          guildId: t
        })]
      })]
    })]
  })
}