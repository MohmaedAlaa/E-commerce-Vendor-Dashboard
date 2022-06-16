import LanguageIcon from '@mui/icons-material/Language';
export default function Example() {
    return (
      <>
        <div className="min-h-full flex w-full">
            <div className="hidden lg:block relative flex-1 w-1/2">
                <img
                className="inset-0 h-full w-full object-cover"
                src="/Layer 2.svg"
                alt=""
                />
            </div>

          <div className="relative flex-1 flex flex-col justify-center py-12 sm:px-6 lg:flex-none lg:px-12 xl:px-12 w-1/2">
            <div className="absolute text-[#707082] font-medium top-24 right-24 w-full w-1/5">
                <a href="#">
                   <LanguageIcon className='mb-1'/> Deutsch
                </a>
            </div>
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <div>
                <h2 className="mt-6 text-3xl font-bold">Welcome Back!</h2>
              </div>
  
              <div className="mt-16">
  
                <div className="mt-6">
                  <form action="#" method="POST" className="space-y-6">
                    <div>
                      <label htmlFor="email" className="block text-sm text-[#707082]">
                        Email address
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="appearance-none block w-full bg-[#F9F9F9] text-[#232323]border border-[#D4D4D4] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#D4D4D4] focus:ring-[#3D897A]"
                        />
                      </div>
                    </div>
  
                    <div className="space-y-1">
                      <label htmlFor="password" className="block text-sm text-[#707082]">
                        Password
                      </label>
                      <div className="mt-1">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          className="appearance-none block w-full bg-[#F9F9F9] text-[#232323]border border-[#D4D4D4] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#D4D4D4] focus:ring-[#3D897A]"
                        />
                      </div>
                    </div>
  
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 rounded text-[#3D897A] focus:ring-[#3D897A]"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-[#707082]">
                          Remember me
                        </label>
                      </div>
                    </div>
  
                    <div>
                      <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-[10px] shadow-sm text-sm font-medium text-white bg-[#3D897A] hover:bg-[#3D897A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3D897A]"
                      >
                        Login
                      </button>

                      <div className="text-sm mt-5 mb-16 ml-36">
                          <a href="/ForgotPassword" className="font-medium ">
                              Forgot password?
                          </a>
                      </div>
                    </div>
                    <div className="text-sm">
                        <a href="#" className="font-medium">
                            Don't have an account? <span className="ml-1 text-base"> Create Account</span>
                        </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>
      </>
    )
  }
  