/** Chunk was on 44799 **/
t.d(n, {
  ZP: () => Z,
  _R: () => g
}), t(47120);
var r = t(200651),
  i = t(192379),
  o = t(120356),
  s = t.n(o),
  a = t(793030),
  l = t(481060),
  c = t(808189),
  d = t(413335),
  u = t(762762),
  v = t(157353),
  x = t(838968),
  p = t(279604),
  b = t(730621),
  m = t(388032),
  j = t(610881),
  h = t(709435);

function _(e) {
  let n, {
    active: t,
    nextActive: i,
    position: o
  } = e;
  return n = t && !1 !== i ? "full" : t && !1 === i ? "half" : "none", (0, r.jsxs)("div", {
    className: j.progressContainer,
    children: [(0, r.jsx)("div", {
      className: s()(j.progress, j[o], j[n])
    }), (0, r.jsx)("div", {
      className: s()(j.boostContainer, {
        [j.boostContainerActive]: t
      }),
      children: (0, r.jsx)(d.Z, {
        className: j.boost,
        width: 16,
        height: 16,
        fill: "white"
      })
    })]
  })
}

function f(e) {
  var n, t;
  let {
    index: i
  } = e;
  return (0, r.jsx)("div", {
    className: j.perkRowContainer,
    children: null === (t = c.C[i]) || void 0 === t ? void 0 : null === (n = t.perks) || void 0 === n ? void 0 : n.map((e, n) => (0, r.jsxs)("div", {
      className: j.perkRow,
      children: [(0, r.jsx)(e.icon, {
        color: l.TVs.colors.TEXT_MUTED,
        size: "sm"
      }), (0, r.jsx)(a.xv, {
        className: j.perkText,
        color: "text-muted",
        variant: "text-sm/medium",
        children: e.getCopy()
      })]
    }, n))
  })
}

function g(e) {
  let {
    className: n,
    guildId: t,
    powerup: o,
    onError: a
  } = e, {
    onActivate: c,
    isLoading: x,
    error: h,
    onShowDeactivate: _
  } = (0, p.Z)(t, o), f = (0, v.Z)(t, o), {
    disabled: g,
    reason: Z
  } = (0, u.Z)(t, o, f);
  return i.useEffect(() => {
    null == a || a(h)
  }, [h, a]), (0, r.jsx)(l.ua7, {
    text: Z,
    shouldShow: null != Z,
    children: e => {
      var t, i;
      return (0, r.jsxs)(l.zxk, (t = function(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), r.forEach(function(n) {
            var r;
            r = t[n], n in e ? Object.defineProperty(e, n, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[n] = r
          })
        }
        return e
      }({}, e), i = i = {
        onClick: f ? _ : c,
        fullWidth: !0,
        wrapperClassName: s()(j.button, n),
        innerClassName: j.buttonInner,
        color: f ? l.Ttl.PRIMARY : l.Ttl.BRAND,
        submitting: x,
        disabled: g,
        children: [m.NW.string(f ? b.Z.PYPdl5 : b.Z.AOQgkp), !f && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("span", {
            className: j.dot,
            children: "•"
          }), (0, r.jsx)(d.Z, {
            className: j.boost,
            width: 16,
            height: 16,
            fill: "white"
          }), " ", (0, r.jsx)("span", {
            className: j.cost,
            children: o.cost
          })]
        })]
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t.push.apply(t, r)
        }
        return t
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
      }), t))
    }
  })
}

function Z(e) {
  let n, {
      guildId: t,
      index: o,
      powerup: s,
      nextPowerup: l
    } = e,
    {
      onShowMore: c
    } = (0, p.Z)(t, s),
    d = (0, v.Z)(t, s),
    u = (0, v.Z)(t, l),
    [b, m] = i.useState(void 0);
  return (0, p.K)(b), n = 0 === o ? "start" : null == l ? "end" : "middle", (0, r.jsxs)(x.Z, {
    label: s.title,
    onClick: c,
    active: d,
    className: j.card,
    children: [(0, r.jsx)(_, {
      position: n,
      active: d,
      nextActive: u
    }), (0, r.jsxs)("div", {
      className: h.contentContainer,
      children: [(0, r.jsx)(a.X6, {
        variant: "heading-md/bold",
        children: s.title
      }), (0, r.jsx)(f, {
        index: o
      }), (0, r.jsx)(g, {
        guildId: t,
        powerup: s,
        onError: m
      })]
    })]
  })
}