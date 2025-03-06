/** Chunk was on 51724 **/
n.d(t, {
  Sz: () => j,
  of: () => E
}), n(653041), n(47120), n(230036);
var r = n(200651),
  i = n(192379),
  s = n(913527),
  a = n.n(s),
  l = n(99945),
  o = n(780384),
  c = n(481060),
  d = n(355467),
  u = n(493773),
  m = n(410030),
  p = n(906732),
  g = n(600164),
  h = n(296848),
  f = n(798769),
  x = n(981631),
  b = n(388032),
  N = n(171277);
async function _(e) {
  let {
    premiumSubscription: t,
    pauseDuration: n,
    onClose: r,
    setHasError: i,
    setIsCancelling: s,
    analyticsLocations: a,
    analyticsLocation: l
  } = e;
  try {
    s(!0), i(!1), await (0, d.Mg)(t, {
      pauseDuration: n
    }, a, l), r()
  } catch (e) {
    i(!0), s(!1)
  }
}

function E(e) {
  let {
    premiumType: t,
    onClose: n,
    pauseDuration: s,
    setPauseDuration: a,
    footer: o,
    premiumSubscription: d
  } = e, m = i.useCallback(e => {
    let {
      value: t
    } = e;
    a(t)
  }, [a]), p = d.status === x.O0b.PAUSED ? b.NW.string(b.t.Lp9WoK) : b.NW.string(b.t.eSR83d), _ = function(e) {
    let t = e.status === x.O0b.PAUSED ? b.t.o3upfX : b.t.dBXZEh,
      {
        durations: n,
        currentDaysPaused: r
      } = (0, h.AT)(e),
      i = [];
    for (let e of n) {
      let n = l.T[e];
      i.push({
        name: b.NW.formatToPlainString(t, {
          days: n - r
        }),
        value: n,
        radioItemIconClassName: N.radioOption
      })
    }
    return i.sort((e, t) => e.value - t.value), i.push({
      name: b.NW.string(b.t.OCPUMz),
      value: 0,
      radioBarClassName: N.cancelText,
      radioItemIconClassName: N.cancelText
    }), i
  }(d);
  return (0, u.ZP)(() => {
    !(_.length < 1) && a(_[0].value)
  }), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(f.Z, {
      premiumType: t,
      onClose: n
    }), (0, r.jsx)(c.xBx, {
      separator: !1,
      children: (0, r.jsxs)("div", {
        className: N.__invalid_header,
        children: [(0, r.jsx)(c.X6q, {
          variant: "heading-xl/bold",
          className: N.__invalid_modalHeader,
          children: b.NW.string(b.t.f3nnBw)
        }), (0, r.jsx)(c.X6q, {
          variant: "heading-sm/medium",
          className: N.subtitle,
          children: p
        })]
      })
    }), (0, r.jsx)(c.hzk, {
      className: N.body,
      children: (0, r.jsx)(c.FXm, {
        options: _,
        onChange: m,
        value: s
      })
    }), (0, r.jsx)(c.mzw, {
      justify: g.Z.Justify.START,
      children: o
    })]
  })
}

function j(e) {
  let {
    premiumSubscription: t,
    premiumType: n,
    onClose: s,
    pauseDuration: l,
    analyticsLocation: d
  } = e, [u, h] = i.useState(!1), {
    analyticsLocations: E
  } = (0, p.ZP)(), [j, C] = i.useState(!1), O = (0, m.ZP)(), v = null, S = null, T = [x.O0b.PAST_DUE, x.O0b.PAUSED].includes(t.status) ? t.currentPeriodStart : t.currentPeriodEnd, I = a()(T).add(l, "days").toDate();
  switch (t.status) {
    case x.O0b.PAST_DUE:
      S = b.NW.format(b.t["xaS18/"], {
        pauseDuration: l,
        resumeDate: I
      });
      break;
    case x.O0b.PAUSED:
      S = b.NW.format(b.t.Vur3FR, {
        resumeDate: I
      });
      break;
    default:
      S = b.NW.format(b.t.W85vFB, {
        pauseDate: T,
        resumeDate: I,
        pauseDuration: l
      })
  }
  return v = (0, r.jsx)("div", {
    className: N.body,
    children: S
  }), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(f.Z, {
      premiumType: n,
      onClose: s
    }), (0, r.jsx)(c.xBx, {
      separator: !1,
      children: (0, r.jsx)("div", {
        className: N.__invalid_header,
        children: (0, r.jsx)(c.X6q, {
          variant: "heading-xl/bold",
          className: N.__invalid_modalHeader,
          children: b.NW.string(b.t["AnMG5+"])
        })
      })
    }), (0, r.jsxs)(c.hzk, {
      className: N.body,
      children: [u ? (0, r.jsx)(c.kzN, {
        className: N.errorBlock,
        children: b.NW.string(b.t["5mlOCQ"])
      }) : null, v]
    }), (0, r.jsx)(c.mzw, {
      justify: g.Z.Justify.START,
      children: (0, r.jsxs)("div", {
        className: N.whatYouLoseButtonContainer,
        children: [(0, r.jsx)(c.zxk, {
          color: c.zxk.Colors.RED,
          disabled: j || null == l,
          onClick: async () => {
            await _({
              premiumSubscription: t,
              pauseDuration: l,
              setIsCancelling: C,
              setHasError: h,
              onClose: s,
              analyticsLocations: E,
              analyticsLocation: d
            })
          },
          children: b.NW.string(b.t["cY+Ooa"])
        }), (0, r.jsx)(c.zxk, {
          look: c.zxk.Looks.LINK,
          color: (0, o.wj)(O) ? c.zxk.Colors.WHITE : c.zxk.Colors.PRIMARY,
          onClick: s,
          children: b.NW.string(b.t.h9tkAA)
        })]
      })
    })]
  })
}