/** Chunk was on 94700 **/
/** chunk id: 522579, original params: t (module,exports,require) **/
var e = e || function(t) {
  "use strict";
  if (!("u" > typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
    var e = t.document,
      r = function() {
        return t.URL || t.webkitURL || t
      },
      n = e.createElementNS("http://www.w3.org/1999/xhtml", "a"),
      s = "download" in n,
      i = function(t) {
        var e = new MouseEvent("click");
        t.dispatchEvent(e)
      },
      o = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
      a = t.webkitRequestFileSystem,
      c = t.requestFileSystem || a || t.mozRequestFileSystem,
      u = function(e) {
        (t.setImmediate || t.setTimeout)(function() {
          throw e
        }, 0)
      },
      h = "application/octet-stream",
      l = 0,
      d = function(t) {
        setTimeout(function() {
          "string" == typeof t ? r().revokeObjectURL(t) : t.remove()
        }, 4e4)
      },
      _ = function(t, e, r) {
        for (var n = (e = [].concat(e)).length; n--;) {
          var s = t["on" + e[n]];
          if ("function" == typeof s) try {
            s.call(t, r || t)
          } catch (t) {
            u(t)
          }
        }
      },
      p = function(t) {
        return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob(["\xef\xbb\xbf", t], {
          type: t.type
        }) : t
      },
      f = function(e, u, f) {
        f || (e = p(e));
        var g, v, m = this,
          S = e.type,
          y = false,
          b = function() {
            _(m, "writestart progress write writeend".split(" "))
          },
          w = function() {
            if (v && o && "u" > typeof FileReader) {
              var n = new FileReader;
              n.onloadend = function() {
                var t = n.result;
                v.location.href = "data:attachment/file" + t.slice(t.search(/[,;]/)), m.readyState = m.DONE, b()
              }, n.readAsDataURL(e), m.readyState = m.INIT;
              return
            }(y || !g) && (g = r().createObjectURL(e)), v ? v.location.href = g : true === t.open(g, "_blank") && o && (t.location.href = g), m.readyState = m.DONE, b(), d(g)
          },
          x = function(t) {
            return function() {
              if (m.readyState !== m.DONE) return t.apply(this, arguments)
            }
          },
          E = {
            create: true,
            exclusive: false
          };
        if (m.readyState = m.INIT, u || (u = "download"), s) {
          g = r().createObjectURL(e), setTimeout(function() {
            n.href = g, n.download = u, i(n), b(), d(g), m.readyState = m.DONE
          });
          return
        }(t.chrome && S && S !== h && (e = (e.slice || e.webkitSlice).call(e, 0, e.size, h), y = true), a && "download" !== u && (u += ".download"), (S === h || a) && (v = t), c) ? (l += e.size, c(t.TEMPORARY, l, x(function(t) {
          t.root.getDirectory("saved", E, x(function(t) {
            var r = function() {
              t.getFile(u, E, x(function(t) {
                t.createWriter(x(function(r) {
                  r.onwriteend = function(e) {
                    v.location.href = t.toURL(), m.readyState = m.DONE, _(m, "writeend", e), d(t)
                  }, r.onerror = function() {
                    var t = r.error;
                    t.code !== t.ABORT_ERR && w()
                  }, "writestart progress write abort".split(" ").forEach(function(t) {
                    r["on" + t] = m["on" + t]
                  }), r.write(e), m.abort = function() {
                    r.abort(), m.readyState = m.DONE
                  }, m.readyState = m.WRITING
                }), w)
              }), w)
            };
            t.getFile(u, {
              create: false
            }, x(function(t) {
              t.remove(), r()
            }), x(function(t) {
              t.code === t.NOT_FOUND_ERR ? r() : w()
            }))
          }), w)
        }), w)) : w()
      },
      g = f.prototype;
    return "u" > typeof navigator && navigator.msSaveOrOpenBlob ? function(t, e, r) {
      return r || (t = p(t)), navigator.msSaveOrOpenBlob(t, e || "download")
    } : (g.abort = function() {
      this.readyState = this.DONE, _(this, "abort")
    }, g.readyState = g.INIT = 0, g.WRITING = 1, g.DONE = 2, g.error = g.onwritestart = g.onprogress = g.onwrite = g.onabort = g.onerror = g.onwriteend = null, function(t, e, r) {
      return new f(t, e, r)
    })
  }
}("u" > typeof self && self || "u" > typeof window && window || this.content);
module.exports ? module.exports.saveAs = e : "u" > typeof define && null !== define && null !== define.amd && define([], function() {
  return e
})