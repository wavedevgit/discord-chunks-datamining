/** Chunk was on 44799 **/
/** chunk id: 504392, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R
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
  Chunk744993 = require("./744993.js"),
  Chunk634952 = require("./634952.js"),
  Chunk248641 = require("./248641.jsx"),
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
let U = [Chunk535396.Us.LEVEL, Chunk535396.Us.PERK];

function R(e) {
  let {
    guildId: t,
    powerupListingId: i
  } = e, R = (0, g.A0)(t, "GuildPowerupsOverview");
  o.useEffect(() => {
    R && ((0, m.EC)(t), (0, m.po)(t))
  }, [t, R]), o.useEffect(() => {
    (0, _.Sn)(t), (0, _.BN)(t)
  }, [t]), (0, S.Wj)(t);
  let L = (0, a.e7)([v.Z], () => v.Z.getStateForGuild(t)),
    M = (0, x.Z)(t),
    G = o.useRef(false),
    {
      shouldShow: D,
      modalConfig: V
    } = (0, y.K)(t, "GuildPowerupsOverview"),
    B = null == i && null != V,
    W = [];
  D && B && W.push(s.z.VANITY_URL_POWERUP_ROLLBACK_MODAL);
  let [F, K] = (0, u.US)(W), z = o.useMemo(() => U.reduce((e, t) => {
    let n = null == L ? true : L.powerupCatalog[t];
    if (null == n) return e;
    let r = (0, C.S)(t, n, R);
    return e.push({
      type: t,
      listings: r
    }), e
  }, []), [null == L ? true : L.powerupCatalog, R]), X = z.flatMap(e => e.listings).filter(e => "multiPerk" === e.type).map(e => e.group), H = (0, N.f)(X, t);
  return (o.useEffect(() => {
    if (null != i && !G.current)
      for (let e of z)
        for (let n of e.listings) {
          if (("singleLevel" === n.type || "singlePerk" === n.type) && n.powerup.skuId === i) {
            (0, P.KE)(t, n.powerup), G.current = true;
            return
          }
          if ("multiPerk" === n.type && (n.group === i || n.powerups.some(e => e.skuId === i))) {
            G.current = true;
            let e = H[n.group];
            if (null == e) return;
            e.openModal(n.powerups, {
              onModalClose: () => {
                let e = new URL(window.location.href);
                e.searchParams.delete(Z.am);
                let t = e.pathname + e.search + e.hash;
                (0, p.dL)(t), G.current = false
              }
            });
            return
          }
        }
  }, [t, i, z, H]), o.useEffect(() => {
    null != F && null != V && (0, c.ZDy)(async () => {
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
        markAsDismissed: K
      }, t))
    }, {
      onCloseCallback: () => {
        K(w.L.USER_DISMISS)
      },
      modalKey: "dismissible_content_".concat(F)
    })
  }, [t, F, K, V]), (null == L ? true : L.powerupCatalog) == null) ? null : (0, r.jsxs)("div", {
    className: A.container,
    children: [(0, r.jsxs)(d.Z, {
      className: A.toolbar,
      hideSearch: true,
      toolbar: (0, r.jsx)("div", {}),
      children: [(0, r.jsx)(d.Z.Icon, {
        icon: c.$Eu,
        "aria-label": ""
      }), (0, r.jsx)(d.Z.Title, {
        children: k.intl.string(O.default.yv3DJC)
      })]
    }), (0, r.jsxs)("div", {
      className: A.contentContainer,
      children: [(0, r.jsx)(c.zJl, {
        className: A.powerupsContainer,
        children: z.map(e => {
          let {
            type: n,
            listings: o
          } = e, {
            title: i,
            description: a
          } = function(e) {
            switch (e) {
              case Z.Us.LEVEL:
                return {
                  title: k.intl.string(O.default["TXY/b2"]), description: k.intl.string(O.default.aJv4PD)
                };
              case Z.Us.PERK:
                return {
                  title: k.intl.string(O.default.TV3Vm5), description: k.intl.string(O.default.STx9ho)
                }
            }
          }(n), s = n === Z.Us.LEVEL ? c.zJl : "div";
          return (0, r.jsxs)("div", {
            className: A.powerupsSection,
            children: [(0, r.jsxs)("div", {
              className: A.powerupHorizontalPadding,
              children: [(0, r.jsx)(c.X6q, {
                color: "header-primary",
                variant: "heading-lg/semibold",
                children: i
              }), (0, r.jsx)(c.Text, {
                color: "text-muted",
                variant: "text-sm/medium",
                children: a
              })]
            }), (0, r.jsx)(s, {
              orientation: "horizontal",
              className: l()(A.powerupContainer, A.powerupHorizontalPadding, {
                [A.powerupsLevelContainer]: n === Z.Us.LEVEL
              }),
              fade: true,
              children: o.map((e, n) => {
                switch (e.type) {
                  case "singleLevel":
                    var i;
                    return (0, r.jsx)(h.ZP, {
                      guildId: t,
                      index: n,
                      powerup: e.powerup,
                      nextPowerup: null == (i = o[n + 1]) ? true : i.powerup
                    }, "powerup-".concat(e.powerup.skuId));
                  case "singlePerk":
                    return (0, r.jsx)(E.Z, {
                      guildId: t,
                      powerup: e.powerup
                    }, "powerup-".concat(e.powerup.skuId));
                  case "multiPerk":
                    return (0, r.jsx)(b.Z, {
                      guildId: t,
                      group: e.group,
                      powerups: e.powerups
                    }, "powerup-group-".concat(e.group));
                  case "portkey":
                    return (0, r.jsx)(f.Z, {
                      guildId: t
                    }, "powerup-portkey")
                }
              })
            })]
          }, "section-".concat(n))
        })
      }), (0, r.jsxs)("div", {
        className: A.sidebarContainer,
        children: [M ? (0, r.jsx)(T.Z, {
          guildId: t
        }) : (0, r.jsx)(I.Z, {
          guildId: t
        }), (0, r.jsx)(j.Z, {
          guildId: t
        })]
      })]
    })]
  })
}