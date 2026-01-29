/** Chunk was on 86266 **/
/** chunk id: 522579, original params: t (module,exports,require) **/
var e = e || function(t) {
  "use strict";
  if (!("u" > typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
    var e = t.document,
      n = function() {
        return t.URL || t.webkitURL || t
      },
      r = e.createElementNS("http://www.w3.org/1999/xhtml", "a"),
      o = "download" in r,
      i = function(t) {
        var e = new MouseEvent("click");
        t.dispatchEvent(e)
      },
      a = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
      c = t.webkitRequestFileSystem,
      u = t.requestFileSystem || c || t.mozRequestFileSystem,
      l = function(e) {
        (t.setImmediate || t.setTimeout)(function() {
          throw e
        }, 0)
      },
      s = "application/octet-stream",
      d = 0,
      f = function(t) {
        setTimeout(function() {
          "string" == typeof t ? n().revokeObjectURL(t) : t.remove()
        }, 4e4)
      },
      p = function(t, e, n) {
        for (var r = (e = [].concat(e)).length; r--;) {
          var o = t["on" + e[r]];
          if ("function" == typeof o) try {
            o.call(t, n || t)
          } catch (t) {
            l(t)
          }
        }
      },
      b = function(t) {
        return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob(["\xef\xbb\xbf", t], {
          type: t.type
        }) : t
      },
      y = function(e, l, y) {
        y || (e = b(e));
        var O, g, w = this,
          v = e.type,
          m = false,
          h = function() {
            p(w, "writestart progress write writeend".split(" "))
          },
          j = function() {
            if (g && a && "u" > typeof FileReader) {
              var r = new FileReader;
              r.onloadend = function() {
                var t = r.result;
                g.location.href = "data:attachment/file" + t.slice(t.search(/[,;]/)), w.readyState = w.DONE, h()
              }, r.readAsDataURL(e), w.readyState = w.INIT;
              return
            }(m || !O) && (O = n().createObjectURL(e)), g ? g.location.href = O : true === t.open(O, "_blank") && a && (t.location.href = O), w.readyState = w.DONE, h(), f(O)
          },
          S = function(t) {
            return function() {
              if (w.readyState !== w.DONE) return t.apply(this, arguments)
            }
          },
          A = {
            create: true,
            exclusive: false
          };
        if (w.readyState = w.INIT, l || (l = "download"), o) {
          O = n().createObjectURL(e), setTimeout(function() {
            r.href = O, r.download = l, i(r), h(), f(O), w.readyState = w.DONE
          });
          return
        }(t.chrome && v && v !== s && (e = (e.slice || e.webkitSlice).call(e, 0, e.size, s), m = true), c && "download" !== l && (l += ".download"), (v === s || c) && (g = t), u) ? (d += e.size, u(t.TEMPORARY, d, S(function(t) {
          t.root.getDirectory("saved", A, S(function(t) {
            var n = function() {
              t.getFile(l, A, S(function(t) {
                t.createWriter(S(function(n) {
                  n.onwriteend = function(e) {
                    g.location.href = t.toURL(), w.readyState = w.DONE, p(w, "writeend", e), f(t)
                  }, n.onerror = function() {
                    var t = n.error;
                    t.code !== t.ABORT_ERR && j()
                  }, "writestart progress write abort".split(" ").forEach(function(t) {
                    n["on" + t] = w["on" + t]
                  }), n.write(e), w.abort = function() {
                    n.abort(), w.readyState = w.DONE
                  }, w.readyState = w.WRITING
                }), j)
              }), j)
            };
            t.getFile(l, {
              create: false
            }, S(function(t) {
              t.remove(), n()
            }), S(function(t) {
              t.code === t.NOT_FOUND_ERR ? n() : j()
            }))
          }), j)
        }), j)) : j()
      },
      O = y.prototype;
    return "u" > typeof navigator && navigator.msSaveOrOpenBlob ? function(t, e, n) {
      return n || (t = b(t)), navigator.msSaveOrOpenBlob(t, e || "download")
    } : (O.abort = function() {
      this.readyState = this.DONE, p(this, "abort")
    }, O.readyState = O.INIT = 0, O.WRITING = 1, O.DONE = 2, O.error = O.onwritestart = O.onprogress = O.onwrite = O.onabort = O.onerror = O.onwriteend = null, function(t, e, n) {
      return new y(t, e, n)
    })
  }
}("u" > typeof self && self || "u" > typeof window && window || this.content);
module.exports ? module.exports.saveAs = e : "u" > typeof define && null !== define && null !== define.amd && define([], function() {
  return e
})