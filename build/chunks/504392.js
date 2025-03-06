/** Chunk was on 44799 **/
t.d(n, {
  Z: () => _
});
var r = t(200651),
  i = t(192379),
  o = t(481060),
  s = t(413335),
  a = t(984370),
  l = t(713081),
  c = t(111360),
  d = t(27237),
  u = t(51859),
  v = t(953478),
  x = t(460608),
  p = t(535396),
  b = t(730621),
  m = t(388032),
  j = t(518871);
let h = [p.Us.LEVEL, p.Us.PERK];

function _(e) {
  let {
    guildId: n
  } = e;
  i.useEffect(() => {
    (0, l.Sn)(n), (0, l.Fm)(n)
  }, [n]);
  let t = (0, c.Z)(n);
  return null == t ? null : (0, r.jsxs)("div", {
    className: j.container,
    children: [(0, r.jsxs)(a.Z, {
      hideSearch: !0,
      toolbar: (0, r.jsx)("div", {}),
      children: [(0, r.jsx)(a.Z.Icon, {
        icon: (0, o.GSL)(s.Z),
        disabled: !0,
        "aria-label": ""
      }), (0, r.jsx)(a.Z.Title, {
        children: m.NW.string(b.Z.yv3DJC)
      }), (0, r.jsx)(a.Z.Divider, {})]
    }), (0, r.jsxs)("div", {
      className: j.contentContainer,
      children: [(0, r.jsx)("div", {
        className: j.powerupsContainer,
        children: h.map(e => {
          let s = t.get(e);
          if (null != s) return (0, r.jsxs)(i.Fragment, {
            children: [(0, r.jsxs)("div", {
              className: j.powerupTextContainer,
              children: [(0, r.jsx)(o.X6q, {
                variant: "heading-lg/semibold",
                children: m.NW.string(b.Z["TXY/b2"])
              }), (0, r.jsx)(o.Text, {
                variant: "text-sm/medium",
                children: m.NW.string(b.Z.aJv4PD)
              })]
            }), (0, r.jsx)("div", {
              className: j.powerupContainer,
              children: s.map((e, t) => {
                switch (e.type) {
                  case p.Us.LEVEL:
                    return (0, r.jsx)(d.ZP, {
                      guildId: n,
                      index: t,
                      powerup: e,
                      nextPowerup: s[t + 1]
                    }, "powerup-".concat(e.skuId));
                  case p.Us.PERK:
                    return (0, r.jsx)(u.Z, {
                      guildId: n,
                      powerup: e
                    }, "powerup-".concat(e.skuId))
                }
              })
            })]
          }, "section-".concat(e))
        })
      }), (0, r.jsxs)("div", {
        className: j.sidebarContainer,
        children: [(0, r.jsx)(v.Z, {
          guildId: n
        }), (0, r.jsx)(x.Z, {
          guildId: n
        })]
      })]
    })]
  })
}