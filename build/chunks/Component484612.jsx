/** Chunk was on 88615 **/
/** chunk id: 484612, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => D
}), require("./321073.js"), require("./896048.js"), require("./114821.js"), require("./339614.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./747238.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk742589 = require("./742589.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk488803 = require("./488803.js"),
  Chunk14081 = require("./14081.jsx"),
  Chunk843095 = require("./843095.jsx"),
  Chunk645619 = require("./645619.js"),
  Chunk489306 = require("./489306.js"),
  Chunk363487 = require("./363487.js"),
  Chunk884928 = require("./884928.js"),
  Chunk884684 = require("./884684.js"),
  Chunk983398 = require("./983398.jsx"),
  Chunk194867 = require("./194867.jsx"),
  Chunk149854 = require("./149854.jsx"),
  Chunk864450 = require("./864450.jsx"),
  Chunk697865 = require("./697865.jsx"),
  Chunk297407 = require("./297407.jsx"),
  Chunk271484 = require("./271484.jsx"),
  Chunk289642 = require("./289642.js"),
  Chunk915667 = require("./915667.jsx"),
  Chunk800007 = require("./800007.js"),
  Chunk568065 = require("./568065.js"),
  Chunk49999 = require("./49999.js"),
  Chunk333354 = require("./333354.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk377514 = require("./377514.js");

function D(e) {
  let {
    guildId: t,
    powerupListingId: i
  } = e;
  (0, h.A)(t);
  let D = (0, m.C$)(t, "GuildPowerupsOverview");
  (0, x.c2)(t);
  let U = (0, o.bG)([g.A], () => g.A.getStateForGuild(t)),
    V = (0, b.A)(t),
    M = n.useRef(false),
    {
      shouldShow: W,
      modalConfig: B
    } = (0, O.A)(t, "GuildPowerupsOverview"),
    F = null == i && null != B,
    K = [];
  W && F && K.push(a.M.VANITY_URL_POWERUP_ROLLBACK_MODAL);
  let [J, Y] = (0, c.kn)(K), z = (0, j.MO)(t, D), X = z.flatMap(e => e.listings).filter(e => "multiPerk" === e.type).map(e => e.group), H = (0, N.g)(X, t);
  return (n.useEffect(() => {
    if (null != i && !M.current)
      for (let e of z)
        for (let l of e.listings) {
          if (("singleLevel" === l.type || "singlePerk" === l.type) && l.powerup.skuId === i) {
            (0, L.A)(t, l.powerup), M.current = true;
            return
          }
          if ("multiPerk" === l.type && (l.group === i || l.powerups.some(e => e.skuId === i))) {
            M.current = true;
            let e = H[l.group];
            if (null == e) return;
            e.openModal(l.powerups, {
              onModalClose: () => {
                let e = new URL(window.location.href);
                e.searchParams.delete(T.G0);
                let t = e.pathname + e.search + e.hash;
                (0, p.bG)(t), M.current = false
              }
            });
            return
          }
          if ("gameServer" === l.type && i === P.W5) {
            (0, A.A)({
              guildId: t,
              analyticsLocation: d.A.GUILD_POWERUPS_OVERVIEW
            }), M.current = true;
            return
          }
        }
  }, [t, i, z, H]), n.useEffect(() => {
    null != J && null != B && (0, u.mMO)(async () => {
      let {
        default: e
      } = await l.e("86618").then(l.bind(l, 442241));
      return t => (0, r.jsx)(e, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var l = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(l);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
            return Object.getOwnPropertyDescriptor(l, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = l[t], t in e ? Object.defineProperty(e, t, {
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
        markAsDismissed: Y
      }, t))
    }, {
      onCloseCallback: () => {
        Y(k.i.USER_DISMISS)
      },
      modalKey: "dismissible_content_".concat(J)
    })
  }, [t, J, Y, B]), (null == U ? true : U.powerupCatalog) == null) ? null : (0, r.jsxs)("div", {
    className: R.kL,
    children: [(0, r.jsxs)(f.A, {
      className: R.KE,
      hideSearch: true,
      toolbar: (0, r.jsx)("div", {}),
      children: [(0, r.jsx)(f.A.Icon, {
        icon: u._Jp,
        "aria-label": ""
      }), (0, r.jsx)(f.A.Title, {
        children: G.intl.string(C.default.yv3DJJ)
      })]
    }), (0, r.jsxs)("div", {
      className: R.hQ,
      children: [(0, r.jsx)(u.IpV, {
        className: R.DO,
        children: z.map(e => {
          let {
            type: l,
            listings: n
          } = e, {
            title: i,
            description: o
          } = function(e) {
            switch (e) {
              case T.o9.LEVEL:
                return {
                  title: G.intl.string(C.default["TXY/b0"]), description: G.intl.string(C.default.aJv4PB)
                };
              case T.o9.PERK:
                return {
                  title: G.intl.string(C.default.TV3Vm8), description: G.intl.string(C.default.STx9hp)
                }
            }
          }(l), a = l === T.o9.LEVEL ? u.IpV : "div";
          return (0, r.jsxs)("div", {
            className: R.lt,
            children: [(0, r.jsxs)("div", {
              className: R.kn,
              children: [(0, r.jsx)(u.Heading, {
                color: "text-strong",
                variant: "heading-lg/semibold",
                children: i
              }), (0, r.jsx)(u.Text, {
                color: "text-muted",
                variant: "text-sm/medium",
                children: o
              })]
            }), (0, r.jsx)(a, {
              orientation: "horizontal",
              className: s()(R.qJ, R.kn, {
                [R.dU]: l === T.o9.LEVEL
              }),
              fade: true,
              children: n.map((e, l) => {
                switch (e.type) {
                  case "singleLevel":
                    var i;
                    return (0, r.jsx)(_.A, {
                      guildId: t,
                      index: l,
                      powerup: e.powerup,
                      nextPowerup: null == (i = n[l + 1]) ? true : i.powerup
                    }, "powerup-".concat(e.powerup.skuId));
                  case "singlePerk":
                    return (0, r.jsx)(y.A, {
                      guildId: t,
                      powerup: e.powerup
                    }, "powerup-".concat(e.powerup.skuId));
                  case "multiPerk":
                    return (0, r.jsx)(E.A, {
                      guildId: t,
                      group: e.group,
                      powerups: e.powerups
                    }, "powerup-group-".concat(e.group));
                  case "gameServer":
                    return (0, r.jsx)(v.A, {
                      guildId: t
                    }, "powerup-game-server")
                }
              })
            })]
          }, "section-".concat(l))
        })
      }), (0, r.jsxs)("div", {
        className: R.so,
        children: [V ? (0, r.jsx)(I.A, {
          guildId: t
        }) : (0, r.jsx)(S.A, {
          guildId: t
        }), (0, r.jsx)(w.A, {
          guildId: t
        })]
      })]
    })]
  })
}