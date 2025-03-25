/** Chunk was on 44799 **/
t.d(n, {
  Z: () => f
}), t(266796);
var r = t(200651),
  i = t(192379),
  o = t(442837),
  s = t(481060),
  a = t(413335),
  l = t(984370),
  c = t(713081),
  d = t(905128),
  u = t(27237),
  m = t(51859),
  x = t(953478),
  v = t(460608),
  p = t(279604),
  _ = t(332538),
  b = t(535396),
  j = t(367123),
  g = t(388032),
  Z = t(518871);
let h = [b.Us.LEVEL, b.Us.PERK];

function f(e) {
  let {
    guildId: n,
    powerupSkuId: t
  } = e, f = (0, _.Z)(n);
  i.useEffect(() => {
    (0, c.Sn)(n), (0, c.Fm)(n)
  }, [n]), i.useEffect(() => {
    (0, c.jd)(n)
  }, [n, f]);
  let N = (0, o.e7)([d.Z], () => d.Z.getStateForGuild(n)),
    C = i.useRef(!1);
  return (i.useEffect(() => {
    var e, r;
    if (null == t) return;
    let i = null == N ? void 0 : null === (r = N.powerups) || void 0 === r ? void 0 : null === (e = r.get) || void 0 === e ? void 0 : e.call(r, t);
    null == i || C.current || ((0, p.KE)(n, i), C.current = !0)
  }, [n, t, null == N ? void 0 : N.powerups]), (null == N ? void 0 : N.catalog) == null) ? null : (0, r.jsxs)("div", {
    className: Z.container,
    children: [(0, r.jsxs)(l.Z, {
      className: Z.toolbar,
      hideSearch: !0,
      toolbar: (0, r.jsx)("div", {}),
      children: [(0, r.jsx)(l.Z.Icon, {
        icon: a.Z,
        disabled: !0,
        "aria-label": ""
      }), (0, r.jsx)(l.Z.Title, {
        children: g.NW.string(j.Z.yv3DJC)
      })]
    }), (0, r.jsxs)("div", {
      className: Z.contentContainer,
      children: [(0, r.jsx)("div", {
        className: Z.powerupsContainer,
        children: h.map(e => {
          let t = N.catalog.get(e);
          if (null == t) return;
          let {
            title: i,
            description: o
          } = function(e) {
            switch (e) {
              case b.Us.LEVEL:
                return {
                  title: g.NW.string(j.Z["TXY/b2"]), description: g.NW.string(j.Z.aJv4PD)
                };
              case b.Us.PERK:
                return {
                  title: g.NW.string(j.Z.TV3Vm5), description: g.NW.string(j.Z.NHjM1t)
                }
            }
          }(e);
          return (0, r.jsxs)("div", {
            className: Z.powerupsSection,
            children: [(0, r.jsxs)("div", {
              children: [(0, r.jsx)(s.X6q, {
                color: "header-primary",
                variant: "heading-lg/semibold",
                children: i
              }), (0, r.jsx)(s.Text, {
                color: "text-muted",
                variant: "text-sm/medium",
                children: o
              })]
            }), (0, r.jsx)("div", {
              className: Z.powerupContainer,
              children: t.map((e, i) => {
                switch (e.type) {
                  case b.Us.LEVEL:
                    return (0, r.jsx)(u.ZP, {
                      guildId: n,
                      index: i,
                      powerup: e,
                      nextPowerup: t[i + 1]
                    }, "powerup-".concat(e.skuId));
                  case b.Us.PERK:
                    return (0, r.jsx)(m.Z, {
                      guildId: n,
                      powerup: e
                    }, "powerup-".concat(e.skuId))
                }
              })
            })]
          }, "section-".concat(e))
        })
      }), (0, r.jsxs)("div", {
        className: Z.sidebarContainer,
        children: [(0, r.jsx)(x.Z, {
          guildId: n
        }), (0, r.jsx)(v.Z, {
          guildId: n
        })]
      })]
    })]
  })
}