/** Chunk was on web.js **/
/** chunk id: 499867, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  KU: () => a,
  Zr: () => s,
  eh: () => i
});
let r = new Map,
  i = e => (t, n, r) => {
    let i = r.subscribe;
    return r.subscribe = (e, t, n) => {
      let a = e;
      if (t) {
        let i = (null == n ? true : n.equalityFn) || Object.is,
          o = e(r.getState());
        a = n => {
          let r = e(n);
          if (!i(o, r)) {
            let e = o;
            t(o = r, e)
          }
        }, (null == n ? true : n.fireImmediately) && t(o, o)
      }
      return i(a)
    }, e(t, n, r)
  };

function a(e, t) {
  let n;
  try {
    n = e()
  } catch (e) {
    return
  }
  return {
    getItem: e => {
      var r;
      let i = e => null === e ? null : JSON.parse(e, null == t ? true : t.reviver),
        a = null != (r = n.getItem(e)) ? r : null;
      return a instanceof Promise ? a.then(i) : i(a)
    },
    setItem: (e, r) => n.setItem(e, JSON.stringify(r, null == t ? true : t.replacer)),
    removeItem: e => n.removeItem(e)
  }
}
let o = e => t => {
    try {
      let n = e(t);
      if (n instanceof Promise) return n;
      return {
        then: e => o(e)(n),
        catch (e) {
          return this
        }
      }
    } catch (e) {
      return {
        then(e) {
          return this
        },
        catch: t => o(t)(e)
      }
    }
  },
  s = (e, t) => (n, r, i) => {
    let s, l = {
        storage: a(() => localStorage),
        partialize: e => e,
        version: 0,
        merge: (e, t) => ({
          ...t,
          ...e
        }),
        ...t
      },
      c = false,
      u = new Set,
      d = new Set,
      f = l.storage;
    if (!f) return e((...e) => {
      console.warn(`[zustand persist middleware] Unable to update item '${l.name}', the given storage is currently unavailable.`), n(...e)
    }, r, i);
    let p = () => {
        let e = l.partialize({
          ...r()
        });
        return f.setItem(l.name, {
          state: e,
          version: l.version
        })
      },
      _ = i.setState;
    i.setState = (e, t) => (_(e, t), p());
    let h = e((...e) => (n(...e), p()), r, i);
    i.getInitialState = () => h;
    let m = () => {
      var e, t;
      if (!f) return;
      c = false, u.forEach(e => {
        var t;
        return e(null != (t = r()) ? t : h)
      });
      let i = (null == (t = l.onRehydrateStorage) ? true : t.call(l, null != (e = r()) ? e : h)) || true;
      return o(f.getItem.bind(f))(l.name).then(e => {
        if (e)
          if ("number" != typeof e.version || e.version === l.version) return [false, e.state];
          else {
            if (l.migrate) {
              let t = l.migrate(e.state, e.version);
              return t instanceof Promise ? t.then(e => [true, e]) : [true, t]
            }
            console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
          } return [false, true]
      }).then(e => {
        var t;
        let [i, a] = e;
        if (n(s = l.merge(a, null != (t = r()) ? t : h), true), i) return p()
      }).then(() => {
        null == i || i(s, true), s = r(), c = true, d.forEach(e => e(s))
      }).catch(e => {
        null == i || i(true, e)
      })
    };
    return i.persist = {
      setOptions: e => {
        l = {
          ...l,
          ...e
        }, e.storage && (f = e.storage)
      },
      clearStorage: () => {
        null == f || f.removeItem(l.name)
      },
      getOptions: () => l,
      rehydrate: () => m(),
      hasHydrated: () => c,
      onHydrate: e => (u.add(e), () => {
        u.delete(e)
      }),
      onFinishHydration: e => (d.add(e), () => {
        d.delete(e)
      })
    }, l.skipHydration || m(), s || h
  }