/** Chunk was on web.js **/
/** chunk id: 872780, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e$: () => f,
  kI: () => p
});
var Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk588486 = require("./588486.js"),
  Chunk570140 = require("./570140.js"),
  Chunk633289 = require("./633289.js"),
  Chunk508825 = require("./508825.js"),
  Chunk981631 = require("./981631.js");

function u(e, t) {
  if (null == e) return {};
  var n, r, i = d(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function d(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
async function f(e) {
  try {
    let t = (await i.tn.get({
      url: c.ANM.APEX_EXPERIMENTS_METADATA,
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
    o.Z.dispatch({
      type: "APEX_EXPERIMENTS_METADATA_FETCH_SUCCESS",
      experiments: t
    })
  } catch (e) {
    o.Z.dispatch({
      type: "APEX_EXPERIMENTS_METADATA_FETCH_FAILURE"
    }), console.log(e)
  }
}
async function p(e) {
  if (!(null != e && s.Z.hasLoaded(e)) && !(s.Z.isFetching(l.ZX) || s.Z.hasLoaded(l.ZX))) {
    o.Z.dispatch({
      type: "APEX_EXPERIMENTS_FETCH_START",
      unitId: l.ZX
    });
    try {
      let e = await i.tn.get({
        url: c.ANM.APEX_EXPERIMENTS,
        query: {
          surface: a.dR.APP
        },
        rejectWithError: false
      });
      if ((null == e ? true : e.body) != null) {
        let t = e.body,
          {
            installation: n
          } = t,
          i = u(t, ["installation"]);
        r.ZP.Emitter.batched(() => {
          n && o.Z.dispatch({
            type: "INSTALLATION_ID",
            installation: n
          }), o.Z.dispatch({
            type: "APEX_EXPERIMENTS_FETCH_SUCCESS",
            unitId: l.ZX,
            experiments: i
          })
        })
      } else o.Z.dispatch({
        type: "APEX_EXPERIMENTS_FETCH_FAILURE",
        unitId: l.ZX
      })
    } catch (e) {
      o.Z.dispatch({
        type: "APEX_EXPERIMENTS_FETCH_FAILURE",
        unitId: l.ZX
      })
    }
  }
}