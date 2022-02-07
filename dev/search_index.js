var documenterSearchIndex = {"docs":
[{"location":"#BasesAndSamples.jl","page":"BasesAndSamples.jl","title":"BasesAndSamples.jl","text":"","category":"section"},{"location":"","page":"BasesAndSamples.jl","title":"BasesAndSamples.jl","text":"BasesAndSamples.jl provides functions for generating some polynomial bases and point sets.","category":"page"},{"location":"","page":"BasesAndSamples.jl","title":"BasesAndSamples.jl","text":"Modules = [BasesAndSamples]","category":"page"},{"location":"#BasesAndSamples.basis_chebyshev-Tuple{Int64, Any}","page":"BasesAndSamples.jl","title":"BasesAndSamples.basis_chebyshev","text":"basis_chebyshev(d::Int,x)\n\nGenerate a basis of chebyshev polynomials up to degree d (inclusive). (https://en.wikipedia.org/wiki/Chebyshev_polynomials)\n\n\n\n\n\n","category":"method"},{"location":"#BasesAndSamples.basis_gegenbauer-Tuple{Any, Any, Any}","page":"BasesAndSamples.jl","title":"BasesAndSamples.basis_gegenbauer","text":"basis_gegenbauer(d, n, x)\n\nBasis for the Gegenbauer polynomials in dimension n up to degree d.  This is the Gegenbauer polynomial with parameter lambda = n/2-1,  or the Jacobi polynomial with alpha = beta = (n-3)/2.  Normalized to evaluate to 1 at 1.  Taken from arxiv/2001.00256, ancillary files, SemidefiniteProgramming.jl.\n\n\n\n\n\n","category":"method"},{"location":"#BasesAndSamples.basis_jacobi","page":"BasesAndSamples.jl","title":"BasesAndSamples.basis_jacobi","text":"basis_jacobi(d::Integer, alpha, beta, x, normalized = true)\n\nGenerate the Jacobi polynomials with parameters alpha and beta up to degree d (inclusive). (https://en.wikipedia.org/wiki/Jacobi_polynomials)\n\n\n\n\n\n","category":"function"},{"location":"#BasesAndSamples.basis_laguerre-Tuple{Integer, Any, Any}","page":"BasesAndSamples.jl","title":"BasesAndSamples.basis_laguerre","text":"basis_laguerre(d::Integer, alpha, x)\n\nGenerate the Laguerre polynomials with parameter alpha up to degree d (inclusive). (https://en.wikipedia.org/wiki/Laguerre_polynomials)\n\n\n\n\n\n","category":"method"},{"location":"#BasesAndSamples.basis_monomial-Tuple{Int64, Vararg{Any}}","page":"BasesAndSamples.jl","title":"BasesAndSamples.basis_monomial","text":"basis_monomial(d::Int, x...)\n\nGenerate the monomial basis in variables x... up to degree d (inclusive).\n\n\n\n\n\n","category":"method"},{"location":"#BasesAndSamples.sample_points_chebyshev","page":"BasesAndSamples.jl","title":"BasesAndSamples.sample_points_chebyshev","text":"sample_points_chebyshev(d, a = -1, b = 1)\n\nGenerate the d+1 chebyshev points in [a,b]. (https://en.wikipedia.org/wiki/Chebyshev_nodes)\n\n\n\n\n\n","category":"function"},{"location":"#BasesAndSamples.sample_points_chebyshev_mod","page":"BasesAndSamples.jl","title":"BasesAndSamples.sample_points_chebyshev_mod","text":"sample_points_chebyshev_mod(d, a = -1, b = 1)\n\nGenerate the d+1 modified chebyshev points in [a,b], the chebyshev points divided by cos(pi/(2(d+1))).\n\n\n\n\n\n","category":"function"},{"location":"#BasesAndSamples.sample_points_padua-Tuple{Any}","page":"BasesAndSamples.jl","title":"BasesAndSamples.sample_points_padua","text":"sample_points_padua(d)\n\nGenerate the Padua points for degree d. (https://en.wikipedia.org/wiki/Padua_points)\n\n\n\n\n\n","category":"method"},{"location":"#BasesAndSamples.sample_points_rescaled_laguerre-Tuple{Any}","page":"BasesAndSamples.jl","title":"BasesAndSamples.sample_points_rescaled_laguerre","text":"sample_points_rescaled_laguerre(d)\n\nGenerate 'rescaled laguerre' points, as in SDPB.\n\n\n\n\n\n","category":"method"},{"location":"#BasesAndSamples.sample_points_simplex-Tuple{Any, Any}","page":"BasesAndSamples.jl","title":"BasesAndSamples.sample_points_simplex","text":"sample_points_simplex(n, d)\n\nGenerate the rational sample points in the unit simplex with denominator d.\n\n\n\n\n\n","category":"method"}]
}