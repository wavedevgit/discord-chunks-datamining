/** Chunk was on 44799 **/
/** chunk id: 504392, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => L
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
  Chunk905551 = require("./905551.js"),
  Chunk755458 = require("./755458.js"),
  Chunk773149 = require("./773149.jsx"),
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
  Chunk789142 = require("./789142.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk287569 = require("./287569.js");
let R = [Chunk535396.Us.LEVEL, Chunk535396.Us.PERK];

function L(e) {
  let {
    guildId: t,
    powerupListingId: o
  } = e, L = (0, m.BU)(t, "GuildPowerupsOverview");
  i.useEffect(() => {
    L && (0, f.ce)(t)
  }, [t, L]), i.useEffect(() => {
    (0, v.Sn)(t), (0, v.BN)(t)
  }, [t]), (0, T.Wj)(t);
  let U = (0, a.e7)([x.Z], () => x.Z.getStateForGuild(t)),
    M = (0, _.Z)(t),
    D = i.useRef(false),
    {
      shouldShow: G,
      modalConfig: V
    } = (0, P.K)(t, "GuildPowerupsOverview"),
    B = null == o && null != V,
    W = [];
  G && B && W.push(s.z.VANITY_URL_POWERUP_ROLLBACK_MODAL);
  let [z, F] = (0, u.US)(W), K = i.useMemo(() => R.reduce((e, t) => {
    let n = null == U ? true : U.powerupCatalog[t];
    if (null == n) return e;
    let r = (0, b.S)(t, n, L);
    return e.push({
      type: t,
      listings: r
    }), e
  }, []), [null == U ? true : U.powerupCatalog, L]), X = K.flatMap(e => e.listings).filter(e => "multiPerk" === e.type).map(e => e.group), H = (0, y.f)(X, t);
  return (i.useEffect(() => {
    if (null != o && !D.current)
      for (let e of K)
        for (let n of e.listings) {
          if (("singleLevel" === n.type || "singlePerk" === n.type) && n.powerup.skuId === o) {
            (0, Z.KE)(t, n.powerup), D.current = true;
            return
          }
          if ("multiPerk" === n.type && (n.group === o || n.powerups.some(e => e.skuId === o))) {
            D.current = true;
            let e = H[n.group];
            if (null == e) return;
            e.openModal(n.powerups, {
              onModalClose: () => {
                let e = new URL(window.location.href);
                e.searchParams.delete(N.am);
                let t = e.pathname + e.search + e.hash;
                (0, p.dL)(t), D.current = false
              }
            });
            return
          }
        }
  }, [t, o, K, H]), i.useEffect(() => {
    null != z && null != V && (0, c.ZDy)(async () => {
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
        modalConfig: V,
        markAsDismissed: F
      }, t))
    }, {
      onCloseCallback: () => {
        F(O.L.USER_DISMISS)
      },
      modalKey: "dismissible_content_".concat(z)
    })
  }, [t, z, F, V]), (null == U ? true : U.powerupCatalog) == null) ? null : (0, r.jsxs)("div", {
    className: k.container,
    children: [(0, r.jsxs)(d.Z, {
      className: k.toolbar,
      hideSearch: true,
      toolbar: (0, r.jsx)("div", {}),
      children: [(0, r.jsx)(d.Z.Icon, {
        icon: c.Ucv,
        "aria-label": ""
      }), (0, r.jsx)(d.Z.Title, {
        children: A.intl.string(S.default.yv3DJJ)
      })]
    }), (0, r.jsxs)("div", {
      className: k.contentContainer,
      children: [(0, r.jsx)(c.zJl, {
        className: k.powerupsContainer,
        children: K.map(e => {
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
                  title: A.intl.string(S.default["TXY/b0"]), description: A.intl.string(S.default.aJv4PB)
                };
              case N.Us.PERK:
                return {
                  title: A.intl.string(S.default.TV3Vm8), description: A.intl.string(S.default.STx9hp)
                }
            }
          }(n), s = n === N.Us.LEVEL ? c.zJl : "div";
          return (0, r.jsxs)("div", {
            className: k.powerupsSection,
            children: [(0, r.jsxs)("div", {
              className: k.powerupHorizontalPadding,
              children: [(0, r.jsx)(c.Heading, {
                color: "header-primary",
                variant: "heading-lg/semibold",
                children: o
              }), (0, r.jsx)(c.Text, {
                color: "text-muted",
                variant: "text-sm/medium",
                children: a
              })]
            }), (0, r.jsx)(s, {
              orientation: "horizontal",
              className: l()(k.powerupContainer, k.powerupHorizontalPadding, {
                [k.powerupsLevelContainer]: n === N.Us.LEVEL
              }),
              fade: true,
              children: i.map((e, n) => {
                switch (e.type) {
                  case "singleLevel":
                    var o;
                    return (0, r.jsx)(h.ZP, {
                      guildId: t,
                      index: n,
                      powerup: e.powerup,
                      nextPowerup: null == (o = i[n + 1]) ? true : o.powerup
                    }, "powerup-".concat(e.powerup.skuId));
                  case "singlePerk":
                    return (0, r.jsx)(C.Z, {
                      guildId: t,
                      powerup: e.powerup
                    }, "powerup-".concat(e.powerup.skuId));
                  case "multiPerk":
                    return (0, r.jsx)(j.Z, {
                      guildId: t,
                      group: e.group,
                      powerups: e.powerups
                    }, "powerup-group-".concat(e.group));
                  case "gameServer":
                    return (0, r.jsx)(g.Z, {
                      guildId: t
                    }, "powerup-game-server")
                }
              })
            })]
          }, "section-".concat(n))
        })
      }), (0, r.jsxs)("div", {
        className: k.sidebarContainer,
        children: [M ? (0, r.jsx)(w.Z, {
          guildId: t
        }) : (0, r.jsx)(I.Z, {
          guildId: t
        }), (0, r.jsx)(E.Z, {
          guildId: t
        })]
      })]
    })]
  })
}