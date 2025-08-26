/** Chunk was on 44799 **/
/** chunk id: 504392, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./539854.js"), require("./388685.js"), require("./361932.js"), require("./187205.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./35282.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk984370 = require("./984370.jsx"),
  Chunk703656 = require("./703656.js"),
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
  Chunk989308 = require("./989308.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk823441 = require("./823441.js");
let A = [Chunk535396.Us.LEVEL, Chunk535396.Us.PERK];

function O(e) {
  let {
    guildId: t,
    powerupListingId: o
  } = e;
  i.useEffect(() => {
    (0, f.Sn)(t), (0, f.Fm)(t)
  }, [t]), (0, w.Wj)(t);
  let O = (0, a.e7)([m.Z], () => m.Z.getStateForGuild(t)),
    k = (0, _.Z)(t),
    R = i.useRef(false),
    {
      shouldShow: L,
      modalConfig: U
    } = (0, E.K)(t, "GuildPowerupsOverview"),
    M = null == o && null != U,
    D = [];
  L && M && D.push(s.z.VANITY_URL_POWERUP_ROLLBACK_MODAL);
  let [V, B] = (0, c.US)(D), G = i.useMemo(() => A.reduce((e, t) => {
    let n = null == O ? true : O.powerupCatalog[t];
    if (null == n) return e;
    let r = (0, g.S)(n);
    return e.push({
      type: t,
      listings: r
    }), e
  }, []), [null == O ? true : O.powerupCatalog]), W = G.flatMap(e => e.listings).filter(e => "multiPerk" === e.type).map(e => e.group), z = (0, Z.f)(W, t);
  return (i.useEffect(() => {
    if (null != o && !R.current)
      for (let e of G)
        for (let n of e.listings) {
          if (("singleLevel" === n.type || "singlePerk" === n.type) && n.powerup.skuId === o) {
            (0, I.KE)(t, n.powerup), R.current = true;
            return
          }
          if ("multiPerk" === n.type && (n.group === o || n.powerups.some(e => e.skuId === o))) {
            R.current = true;
            let e = z[n.group];
            if (null == e) return;
            e.openModal(n.powerups, {
              onModalClose: () => {
                let e = new URL(window.location.href);
                e.searchParams.delete(N.am);
                let t = e.pathname + e.search + e.hash;
                (0, p.dL)(t), R.current = false
              }
            });
            return
          }
        }
  }, [t, o, G, z]), i.useEffect(() => {
    null != V && null != U && (0, u.ZDy)(async () => {
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
        modalConfig: U,
        markAsDismissed: B
      }, t))
    }, {
      onCloseCallback: () => {
        B(P.L.USER_DISMISS)
      },
      modalKey: "dismissible_content_".concat(V)
    })
  }, [t, V, B, U]), (null == O ? true : O.powerupCatalog) == null) ? null : (0, r.jsxs)("div", {
    className: S.container,
    children: [(0, r.jsxs)(d.Z, {
      className: S.toolbar,
      hideSearch: true,
      toolbar: (0, r.jsx)("div", {}),
      children: [(0, r.jsx)(d.Z.Icon, {
        icon: u.$Eu,
        "aria-label": ""
      }), (0, r.jsx)(d.Z.Title, {
        children: y.intl.string(T.default.yv3DJC)
      })]
    }), (0, r.jsxs)("div", {
      className: S.contentContainer,
      children: [(0, r.jsx)(u.zJl, {
        className: S.powerupsContainer,
        children: G.map(e => {
          let {
            type: n,
            listings: i
          } = e, {
            title: o,
            description: a
          } = function(e) {
            switch (e) {
              case N.Us.LEVEL:
                return {
                  title: y.intl.string(T.default["TXY/b2"]), description: y.intl.string(T.default.aJv4PD)
                };
              case N.Us.PERK:
                return {
                  title: y.intl.string(T.default.TV3Vm5), description: y.intl.string(T.default.STx9ho)
                }
            }
          }(n), s = n === N.Us.LEVEL ? u.zJl : "div";
          return (0, r.jsxs)("div", {
            className: S.powerupsSection,
            children: [(0, r.jsxs)("div", {
              className: S.powerupHorizontalPadding,
              children: [(0, r.jsx)(u.X6q, {
                color: "header-primary",
                variant: "heading-lg/semibold",
                children: o
              }), (0, r.jsx)(u.Text, {
                color: "text-muted",
                variant: "text-sm/medium",
                children: a
              })]
            }), (0, r.jsx)(s, {
              orientation: "horizontal",
              className: l()(S.powerupContainer, S.powerupHorizontalPadding, {
                [S.powerupsLevelContainer]: n === N.Us.LEVEL
              }),
              fade: true,
              children: i.map((e, n) => {
                switch (e.type) {
                  case "singleLevel":
                    var o;
                    return (0, r.jsx)(v.ZP, {
                      guildId: t,
                      index: n,
                      powerup: e.powerup,
                      nextPowerup: null == (o = i[n + 1]) ? true : o.powerup
                    }, "powerup-".concat(e.powerup.skuId));
                  case "singlePerk":
                    return (0, r.jsx)(b.Z, {
                      guildId: t,
                      powerup: e.powerup
                    }, "powerup-".concat(e.powerup.skuId));
                  case "multiPerk":
                    return (0, r.jsx)(x.Z, {
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
        className: S.sidebarContainer,
        children: [k ? (0, r.jsx)(h.Z, {
          guildId: t
        }) : (0, r.jsx)(C.Z, {
          guildId: t
        }), (0, r.jsx)(j.Z, {
          guildId: t
        })]
      })]
    })]
  })
}