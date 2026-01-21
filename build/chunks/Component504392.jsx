/** Chunk was on 44799 **/
/** chunk id: 504392, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => U
}), require("./539854.js"), require("./388685.js"), require("./361932.js"), require("./187205.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./35282.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk984370 = require("./984370.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk755458 = require("./755458.js"),
  Chunk773149 = require("./773149.jsx"),
  Chunk735276 = require("./735276.jsx"),
  Chunk905128 = require("./905128.js"),
  Chunk730164 = require("./730164.js"),
  Chunk639777 = require("./639777.js"),
  Chunk124431 = require("./124431.js"),
  Chunk169010 = require("./169010.js"),
  Chunk27237 = require("./27237.jsx"),
  Chunk426771 = require("./426771.jsx"),
  Chunk51859 = require("./51859.jsx"),
  Chunk184478 = require("./184478.jsx"),
  Chunk877362 = require("./877362.jsx"),
  Chunk460608 = require("./460608.jsx"),
  Chunk857666 = require("./857666.jsx"),
  Chunk28239 = require("./28239.js"),
  Chunk196806 = require("./196806.jsx"),
  Chunk619733 = require("./619733.js"),
  Chunk535396 = require("./535396.js"),
  Chunk921944 = require("./921944.js"),
  Chunk556970 = require("./556970.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk919919 = require("./919919.js");

function U(e) {
  let {
    guildId: t,
    powerupListingId: o
  } = e;
  (0, j.Z)(t);
  let U = (0, m.BU)(t, "GuildPowerupsOverview");
  (0, b.Wj)(t);
  let D = (0, a.e7)([x.Z], () => x.Z.getStateForGuild(t)),
    M = (0, h.Z)(t),
    G = i.useRef(false),
    {
      shouldShow: V,
      modalConfig: B
    } = (0, S.Z)(t, "GuildPowerupsOverview"),
    W = null == o && null != B,
    F = [];
  V && W && F.push(s.z.VANITY_URL_POWERUP_ROLLBACK_MODAL);
  let [z, K] = (0, d.US)(F), X = (0, Z._P)(t, U), H = X.flatMap(e => e.listings).filter(e => "multiPerk" === e.type).map(e => e.group), q = (0, T.f)(H, t);
  return (i.useEffect(() => {
    if (null != o && !G.current)
      for (let e of X)
        for (let n of e.listings) {
          if (("singleLevel" === n.type || "singlePerk" === n.type) && n.powerup.skuId === o) {
            (0, y.Z)(t, n.powerup), G.current = true;
            return
          }
          if ("multiPerk" === n.type && (n.group === o || n.powerups.some(e => e.skuId === o))) {
            G.current = true;
            let e = q[n.group];
            if (null == e) return;
            e.openModal(n.powerups, {
              onModalClose: () => {
                let e = new URL(window.location.href);
                e.searchParams.delete(O.am);
                let t = e.pathname + e.search + e.hash;
                (0, p.dL)(t), G.current = false
              }
            });
            return
          }
          if ("gameServer" === n.type && o === N.fj) {
            (0, g.Z)({
              guildId: t,
              analyticsLocation: c.Z.GUILD_POWERUPS_OVERVIEW
            }), G.current = true;
            return
          }
        }
  }, [t, o, X, q]), i.useEffect(() => {
    null != z && null != B && (0, u.ZDy)(async () => {
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
        modalConfig: B,
        markAsDismissed: K
      }, t))
    }, {
      onCloseCallback: () => {
        K(A.L.USER_DISMISS)
      },
      modalKey: "dismissible_content_".concat(z)
    })
  }, [t, z, K, B]), (null == D ? true : D.powerupCatalog) == null) ? null : (0, r.jsxs)("div", {
    className: k.container,
    children: [(0, r.jsxs)(f.Z, {
      className: k.toolbar,
      hideSearch: true,
      toolbar: (0, r.jsx)("div", {}),
      children: [(0, r.jsx)(f.Z.Icon, {
        icon: u.Ucv,
        "aria-label": ""
      }), (0, r.jsx)(f.Z.Title, {
        children: L.intl.string(R.default.yv3DJJ)
      })]
    }), (0, r.jsxs)("div", {
      className: k.contentContainer,
      children: [(0, r.jsx)(u.zJl, {
        className: k.powerupsContainer,
        children: X.map(e => {
          let {
            type: n,
            listings: i
          } = e, {
            title: o,
            description: a
          } = function(e) {
            switch (e) {
              case O.Us.LEVEL:
                return {
                  title: L.intl.string(R.default["TXY/b0"]), description: L.intl.string(R.default.aJv4PB)
                };
              case O.Us.PERK:
                return {
                  title: L.intl.string(R.default.TV3Vm8), description: L.intl.string(R.default.STx9hp)
                }
            }
          }(n), s = n === O.Us.LEVEL ? u.zJl : "div";
          return (0, r.jsxs)("div", {
            className: k.powerupsSection,
            children: [(0, r.jsxs)("div", {
              className: k.powerupHorizontalPadding,
              children: [(0, r.jsx)(u.Heading, {
                color: "text-strong",
                variant: "heading-lg/semibold",
                children: o
              }), (0, r.jsx)(u.Text, {
                color: "text-muted",
                variant: "text-sm/medium",
                children: a
              })]
            }), (0, r.jsx)(s, {
              orientation: "horizontal",
              className: l()(k.powerupContainer, k.powerupHorizontalPadding, {
                [k.powerupsLevelContainer]: n === O.Us.LEVEL
              }),
              fade: true,
              children: i.map((e, n) => {
                switch (e.type) {
                  case "singleLevel":
                    var o;
                    return (0, r.jsx)(_.Z, {
                      guildId: t,
                      index: n,
                      powerup: e.powerup,
                      nextPowerup: null == (o = i[n + 1]) ? true : o.powerup
                    }, "powerup-".concat(e.powerup.skuId));
                  case "singlePerk":
                    return (0, r.jsx)(w.Z, {
                      guildId: t,
                      powerup: e.powerup
                    }, "powerup-".concat(e.powerup.skuId));
                  case "multiPerk":
                    return (0, r.jsx)(C.Z, {
                      guildId: t,
                      group: e.group,
                      powerups: e.powerups
                    }, "powerup-group-".concat(e.group));
                  case "gameServer":
                    return (0, r.jsx)(v.Z, {
                      guildId: t
                    }, "powerup-game-server")
                }
              })
            })]
          }, "section-".concat(n))
        })
      }), (0, r.jsxs)("div", {
        className: k.sidebarContainer,
        children: [M ? (0, r.jsx)(I.Z, {
          guildId: t
        }) : (0, r.jsx)(E.Z, {
          guildId: t
        }), (0, r.jsx)(P.Z, {
          guildId: t
        })]
      })]
    })]
  })
}