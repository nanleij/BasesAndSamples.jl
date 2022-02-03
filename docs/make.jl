using Documenter
push!(LOAD_PATH,"../src/")
using BasesAndSamples

makedocs(
    sitename = "BasesAndSamples.jl Documentation",
    format = Documenter.HTML(),
    modules = [BasesAndSamples]
)

# Documenter can also automatically deploy documentation to gh-pages.
# See "Hosting Documentation" and deploydocs() in the Documenter manual
# for more information.
deploydocs(
    repo = "github.com/nanleij/BasesAndSamples.jl.git",
    devbranch="main"
)
