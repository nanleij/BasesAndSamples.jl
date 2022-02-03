using BasesAndSamples
using Test

using AbstractAlgebra # for polynomial bases

@testset "BasesAndSamples.jl" begin
    # Write your tests here.
    @testset "Bases" begin
        R, (x,) = PolynomialRing(RealField, ["x"])
        R2, (u,v) = PolynomialRing(RealField, ["u", "v"])
        # This is the intuitive order
        @test basis_monomial(3, x) == [R(1), x, x^2, x^3]
        @test basis_monomial(3, u,v) == [R2(1), u, v, u^2, u*v, v^2, u^3, u^2*v, u*v^2,v^3]

        #this shows that the functions generate a basis, but this doesn't mean that it is entirely correct
        functions = [basis_laguerre, basis_chebyshev, basis_jacobi,basis_gegenbauer]
        d = 3
        params = [[d,3,x],[d,x],[d,3,3,x],[d,3,x]]
        for i=1:length(functions)
            @test total_degree.(functions[i](params[i]...)) == [i for i=0:d]
        end
    end

    @testset "samples" begin
        #This tests whether there are enough points, not whether the points are correct
        #univariate tests:
        d = 5
        @test length(sample_points_chebyshev(d)) == d+1
        @test length(sample_points_chebyshev_mod(d)) == d+1
        @test length(sample_points_simplex(1,d)) == d+1
        @test length(sample_points_rescaled_laguerre(d)) == d+1

        #2 variate
        @test length(sample_points_padua(d)) == binomial(2+d,2)
        @test length(sample_points_simplex(2,d)) == binomial(2+d,2)

        #3 variate
        @test length(sample_points_simplex(3,d)) == binomial(3+d,3)
    end
end
