/** Chunk was on web.js **/
/** chunk id: 620233, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Tv: () => p,
  sD: () => f
});
var Chunk311907 = require("./311907.js"),
  Chunk562465 = require("./562465.js"),
  Chunk949355 = require("./949355.js"),
  Chunk73153 = require("./73153.js"),
  Chunk217222 = require("./217222.js"),
  Chunk375441 = require("./375441.js"),
  Chunk652215 = require("./652215.js");

function u(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = d(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function d(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
async function f(e) {
  try {
    let t = (await i.Bo.get({
      url: c.Rsh.APEX_EXPERIMENTS_METADATA,
      query: {
        surface: e
      },
      rejectWithError: true
    })).body.experiments.map(e => ({
      id: e.id,
      name: e.name,
      title: e.title,
      revision: e.revision,
      unitType: e.unit_type,
      variants: e.variants.map(e => ({
        id: e.id,
        label: e.label,
        type: e.type
      }))
    }));
    o.h.dispatch({
      type: "APEX_EXPERIMENTS_METADATA_FETCH_SUCCESS",
      experiments: t
    })
  } catch (e) {
    o.h.dispatch({
      type: "APEX_EXPERIMENTS_METADATA_FETCH_FAILURE"
    }), console.log(e)
  }
}
async function p(e) {
  if (!(null != e && s.A.hasLoaded(e)) && !(s.A.isFetching(l.sz) || s.A.hasLoaded(l.sz))) {
    o.h.dispatch({
      type: "APEX_EXPERIMENTS_FETCH_START",
      unitId: l.sz
    });
    try {
      let e = await i.Bo.get({
        url: c.Rsh.APEX_EXPERIMENTS,
        query: {
          surface: a.Um.APP
        },
        rejectWithError: false
      });
      if ((null == e ? true : e.body) != null) {
        let t = e.body,
          {
            installation: n
          } = t,
          i = u(t, ["installation"]);
        r.Ay.Emitter.batched(() => {
          n && o.h.dispatch({
            type: "INSTALLATION_ID",
            installation: n
          }), o.h.dispatch({
            type: "APEX_EXPERIMENTS_FETCH_SUCCESS",
            unitId: l.sz,
            experiments: i
          })
        })
      } else o.h.dispatch({
        type: "APEX_EXPERIMENTS_FETCH_FAILURE",
        unitId: l.sz
      })
    } catch (e) {
      o.h.dispatch({
        type: "APEX_EXPERIMENTS_FETCH_FAILURE",
        unitId: l.sz
      })
    }
  }
}