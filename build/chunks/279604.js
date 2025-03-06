/** Chunk was on 44799 **/
t.d(n, {
  K: () => c,
  Z: () => d
}), t(47120), t(773603);
var r = t(200651),
  i = t(192379),
  o = t(481060),
  s = t(713081),
  a = t(535396);

function l(e) {
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
}

function c(e) {
  i.useEffect(() => {
    null != e && (0, o.showToast)((0, o.createToast)(e, o.ToastType.FAILURE))
  }, [e])
}

function d(e, n) {
  let [c, d] = i.useState(!1), [u, v] = i.useState(void 0), x = i.useCallback(t => {
    let r = t ? s.H6 : s.Th;
    return d(!0), v(void 0), r(e, n.skuId).catch(e => {
      var n;
      throw v(null !== (n = e.body.message) && void 0 !== n ? n : void 0), e
    }).finally(() => {
      d(!1)
    })
  }, [e, n.skuId]), p = i.useCallback(e => (e.stopPropagation(), x(!0).then(() => {
    (0, o.ZDy)(async () => {
      let {
        default: e
      } = await t.e("13965").then(t.bind(t, 666083));
      return t => (0, r.jsx)(e, l({
        powerup: n
      }, t))
    })
  })), [x, n]), b = i.useCallback(e => (e.stopPropagation(), x(!1)), [x]);
  return {
    isLoading: c,
    error: u,
    onActivate: p,
    onDeactivate: b,
    onShowDeactivate: i.useCallback(i => {
      i.stopPropagation(), (0, o.ZDy)(async () => {
        let {
          default: i
        } = await t.e("31924").then(t.bind(t, 625651));
        return t => (0, r.jsx)(i, l({
          guildId: e,
          powerup: n
        }, t))
      })
    }, [e, n]),
    onShowMore: i.useCallback(() => {
      (0, o.ZDy)(async () => {
        switch (n.type) {
          case a.Us.LEVEL:
            let {
              default: i
            } = await t.e("99014").then(t.bind(t, 271224));
            return t => (0, r.jsx)(i, l({
              guildId: e,
              powerup: n
            }, t));
          case a.Us.PERK: {
            let {
              default: i
            } = await t.e("78718").then(t.bind(t, 640139));
            return t => (0, r.jsx)(i, l({
              guildId: e,
              powerup: n
            }, t))
          }
        }
      })
    }, [e, n])
  }
}