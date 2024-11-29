import React, { useState } from "react";
import { TextField, Button, IconButton, InputAdornment, Typography } from "@mui/material";
import { Visibility, VisibilityOff, Email, Lock } from "@mui/icons-material";
import {useNavigate} from "react-router-dom"

export default function LoginPage() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordVisibility = () => setShowPassword(!showPassword);
  const handleLogin = () => {
    if (email && password) {
      alert("Login successful!");
      // Implement actual login API call here.
    } else {
      alert("Please fill in all fields.");
    }
    navigate("/")
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg flex overflow-hidden w-full md:w-2/3 lg:w-1/2">
        {/* Left Section */}
        <div className="hidden md:flex flex-col items-center justify-center bg-blue-700 text-white w-1/2 p-8">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIPEBAPEA8QEA0PEBAQDxAPEA8PDxAOFhEXFxUVExUYHSggGBolHRUVITEhJSkrLi4uGB8zODMtNygtLjcBCgoKDg0OGxAQGi0lICUtLS81Ky4rLzMrLSsuKy0uLSsrLS03Ky0tLS0vLS0tLS0tLSsrLS0vLSsvLS01LTUtLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwYBAgQFB//EAEMQAAIBAgEHCAgDBwIHAAAAAAABAgMRBAUSEyExcrEGFDJBUVJxkSJTYYGSk6HRI8HCQlRVYqKy4RVjM0OUw9Li8P/EABwBAQABBQEBAAAAAAAAAAAAAAADAQIEBQYHCP/EAEQRAAIBAgEIBggEBAQGAwAAAAABAgMRBAUSEyExUXGRBjJBUmGxFTOBkqHB0eEiU3LwFEKiwhZU0vEHYoKTsuIjNHP/2gAMAwEAAhEDEQA/APuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB5eXMrrDZl9tTOs3dpWt2eJqcq4yvhoR0MU277ez2dvPmZmEwunv4Hi1crTqa89OPstY4nFYrE13atJvw2LktRsYYWEOwh51LvMwtGtxLoo7jHOpd5ldGtw0S3GOdS7zGjW4roo7hzqXeY0a3DRLcY51LvMro1uGiW4c6feY0a3DRLcOdPvMaNbiuiW4c6feY0aGiW4c6feY0a3DRLcOdS7zGjW4poluHOpd5lNGtw0S3GedS7zGjW4aKO4zzqXeY0a3FNFHcZ51LvMaNbhoo7iSllKcNanZdd9nvJ8PWrUJXoyafh9NjLJYaE9qPWyLlxYio6WpyUHO62WTS8P2jsskZQxNeTp10tl77H2bV7fDga/FYPQxz1vse0b8wAAAAAAAAAAAAAAACr8tcNKq8PGCu/xb9i6G00GXa0KUYOT3/I22S5xgpt+HzPIlgFh4LXeUn6XZqXUcdPE6eezUjYQraWT3IidUZpNmmrqjNK5p4XKTESvBXaptPZqTlfr9xn4OEdb7THrpqx05AxEnSec20pNQb7tuFyPFwip6i+hFuOs9LTGNmk2YY0wzSuYNMM0Zg0wzRmDTDNGYNMM0pmHLlTESVGbg3nWWtbUrq7XuuS0IRdRZxZUi1F2PHyBiJ6WybcGm5q7a2an43sZuLhHMu9pjUU84sqqmrzTLzTKqjNKZpNQwyr50G2tV0123RTSui1NIiqTdK0kdvJTAzo4uSktToztJbH6cPqdPkPEwrVm4916vajEyhVjUoK29eTLkdUaMAAAAAAAAAAAAAHDisoJXjDXLY3+yvuznMp9IKWHvTo/in8F9f3wMmnh765Hmybbu23J7W9pw2IxNXETz6srsy0klZHk5fdow3nwJMKrtmdgtrPEdQzs02NjR1CuaVzTSc76nZrsesuStsK5pjSlc0rmmrrFc0rmmrrjMGaY05XMK5g04zBmGdOUzCmabKsM0ZplVimaUzTMJpbEl4KxRpvaUzUSKqW5pTNNlUKZpSx6uQZXnLc/UjFxS/CuJhY1fgXE9z6NbGtTXgYdOpKnJSg7NdqNcd+FyhbVU+NfqX5nZ5M6SKVqeK1Pvdnt3cdhi1MPfXDl9D0U7+B1iaaujEMlQAAAAAAAAAADwKmItKS0dPU3+zr2nnGIyg41Zx0cNTf8AL4m0jT1LW+Zsq38kPhMb0m/yqfu/ctzPF8zE5xe2lSfjBMqsqSWynD3fuVSa2SfM1zYepo/LiV9LT/Lh7v3K3n33zMZsPUUflRK+lqn5cOX3F59+XMZlP1FD5UQsrVHspw937i8+/LmNHT9RQ+VEel6nchy+5W8+/LmY0dP1FD5UB6XqdyHL7jOn35cxoqf7vQ+VAel6nchy+4zqnflzY0VL93ofKgPS9TuQ5fcZ1Tvy5saKl+70PlQHpep3IcvuM6p35c2NFT/d6HyoD0vU7kOX3GdU78ubGjp+oofKgPS9TuQ5fcZ0+/LmZ0dP1FD5UR6XqdyHL7i8+/LmMyn6ih8qJV5VqrbTh7r+pS8+/LmM2HqKPyolPS1T8uHL7i8+/LmZzYepo/LiU9LT/Lh7v3F5998zMHFbKVJeEEg8qze2nD3fuUak9snzN9N/JD4S30m/yoe79ymZ4vmRSxP+3T+EvWUn+VD3fuXql4vme9R6Md1bNmw9Hw7vRhwXkayfWZuTFoAAAAAAAAAAKvVfpy3pcTynF+vn+p+ZuY9VElJmIy2RuULQAADfCRd53V1qtZ9R2vRRQzKrW3Vy1mNi2rRt4mslrZyuUIKGKqxStaUvNk0HeKMGIXgAAAAAAAFYpt2QJMZB2jZa85a7t6us9A6TRh/BptbJK3J6jDwj/G77iM8+MwAAAxN6giq2nPJkiJUWah0I7seB6vhvUw4LyNNPrMkJy0AAAAAAAAAAFVqv05b0uJ5Vi/Xz/U/M3cequBJSZiSLZEpaRgAAG9GVmux6tXadJ0YxKp4p03smvita+Zj4iN433Ga8bO/aW9JcG6WJ0y6s/NbV8+Yw87xtuIznTIAAAAAAABvSjdo2mRsK8RjIR7E858F9XZe0iqyzYM3xMtaVrdb/APvM3/SvELNp0V+p+S+ZDho7WQnGGWAAAaVWViXROebJESotGH6Ed2PA9Ww3qYcF5Gln1mSE5aAAAAAAAAAACp1X6ct6XE8sxfr5/qfmbyPVXA3psw2WyOgsIgAADElde3q8S6nNwkpR2oo1cmw9VVFZ9NdK/wCR6Jh61DK+EdOpt7V2p95fvwZgyTpSujScLeHacTlDJlbBTzai1dkux/R+H+5lwqKa1GpryQAAAAGUrktChUrzVOnG7fYUbSV2TXUIuUrNfW/YehYDB0slYZzqPXtb8kv3rfwwJzdWVkc0JN+k9stfbZdRwmPxcsVXlVl29m5bjNhFRjZGxhl4AABFVZdEvic02SomRa8P0IbseB6rhvUw4LyNJPrPiSExYAAAAAAAAAACoVX6c96XE8txfr5/qfmb6PVXAkgzEZYzqIiEAAAAHPXg08+OpraZeExVShNSg7NFsoqSszpw+OjPVLVLZ7Pcdrhct4bEw0eJSTe/qv6e3mYcqMou8SeVFdXs8yPE9GcNV/FQk439q+vxKxxElqZo6D+tjUT6LYtP8Mov2v6EqxMRoGWLovjX2xXtf0H8TA2VDtZscP0UV71ql/CK+b+hZLE7kYrVoU17eq202jr5PyXBwglfctcnxf1fAizZ1HdnBnutLOeqK2LqOQynlSri5fi1LsXYvq/Ey6dNROk05KRYjEQpq9ScKa7ZyjBebJaWHq1nalBy4JvyLZSjHazzZcqMCtTx+E/6ik+DNjHIOU5a1h6nuP5oj/iKXeXM6cDljDYh5tDE0K0ltjSq05yXuTuY2JybjMMs6vSlFb3Fpc9hdGrCWpNE9V7TFiZMTmmyVEqLbhuhDdjwPVMN6mHBeRo6nWfEkJiwAAAAAAAAAAFOqv0578uJ5di/Xz/U/M38eouBLTMNlkjqjsREyF7TIKAAAAA5a+FvrjqfYSwqW1Mo0RQxU6ep3t7TNoYmtR10ZuPB6uWwslFPajohlTtubGGXcoRWuSfFL5WI3RgZllRe0ull/KDW2K9n1GggQzyhKWwwq2UMXVVqlV23LUvhYvVOK2I1pYdyd5f5NdKoo6ol9jzsv8qKGCeiSdbFNXjh6TWcl1OpLZBe16+xM3eRujeMyo89fhp99/2rt8t7RiYvH0sNG8n7CmY/L2MxN8+u8PTf/Kwl4O381V+m34ZqPSsn9Esm4RJuGklvnr/p6vwb8TlsVl+tU1U9SPK5jTvnOCnN7Z1L1JvxlK7OlhFQjmxVluWw1E8VWm7uTJlSitkYrwSKkLlJ9plQV07K6aadldNbGuxlJRUk01dMRnKLum0fRcg4518PCcnecbwm+2S637WrP3niXSXJsMBlCVOmrRdpJbk+z2NNLwPRsj4t4nCxnLatT4r7WZ01GaRG5iW/DdCG7Hgep4b1MOC8jQ1Ou+JITFgAAAAAAAAAAKZV6c9+XFnl+L9fP9T8zoI9RcCamYbLJHXDYiFkD2mQUAAAAAAMSintVwnYEUsLF9ReqkiljCwkOwaWQsSxppbEkWuTe0qVHlnyplRlzPCNc7lG9WrbOjhqb2O3XUfUve+o7bor0Y/jmsViV/8AEti77X9q7d71bzU5TylHDRstpTMPQUE7XcpNynOTcpzm9spSets9ZjFRSjFWS7FsS8Dha1adaWdNkpcRAAAAAtfImq82tDqThJeLTT4I846fUVehV/UvJrzZ2PRao3GpDg+d/oj36p59E7GJcML0IbkeB6lh/Uw4LyNBU674kpMWAAAAAAAAAAApdXpz35f3HmGL9fPi/M6GPUXBE1MwmRyOuGwhe0gltNgUAAAAAAAAAAB4/KvLawOFnWspVW1ToQ79eXRVutLW37EzcZCyVLKWNjQ/l2ye6K2+17F4sx8VXVGm5s+ZYSi4pucnOtUk51pvW51HrbZ7vTpwpQUIKySsktiS2I86xWIlXqObJy8xwATYTCzrSUKcHOb6l2drfUvazGxWLoYSk6teSjFdr+W9+C1k1ChUrzzKauyxYfkXUavUqwg+yKdR+/Ycbien2Dg7UacpeLtFfN80jfUujdaSvOaXDX9CdciO3E6vZS/9jCl/xCXZhv6//UnXRnfV/p+56uTMlQwsWoXblbOlK13bYtWxa35nK5Zy7XyrUjKokoxvaK7L7W32vV9jocnZNpYKLULtva2S1TUxNvEuOF6ENyPA9Sw/qYcF5HP1Ou+LJSYsAAAAAAAAAABS6vTnvy/uZ5hi/Xz4vzOij1FwRNTMJkUjrp7CF7SCW02BQAAAAAAAAAAHzTl1jdPlCNBP8LBU1KS6ucVFfX22jm27NZ650GyeqOCeJa11H/THUvjf4HK9IMTspr97/keYdscoADMIOTUUrybSSW1t7EWykoRcpOyWv2F0YuTUVtZ9MyHkuOFpKCSdR2dWXXKX2XV/k8Ky9lmplPFOo3+Baorct/F7Xy2I9DydgYYSkora9r3v6LsPRNIbAMA5KhKieJy1SWJPEuOF6ENyPA9Sw/qYcF5HP1Ou+LJSYsAAAAAAAAAABS6vTnvy/uPL8X6+fF+Z0MeouCJqZhsjkdcNhC9pBLabAoAAAAAAAAAAD4zhsRp6mIxN784xFWcX/t51oL3I+h8n4ZYXC06Hdil7UtfxPPMq1dJiGdBlmtAB7PJHDaTFQvrVNSqPxS1fVpnNdLcU8PkqpbbK0ee3+m5tsiUVVxkb9mvls+Nj6KeJHfgAMA5KhKieJy1SWJPEuOF6ENyPA9Sw/qYcF5HP1Ou+LJSYsAAAAAAAAAABTKvTnvy4s8vxfr5/qfmdDHqLgiWmzDZHI64PUiJ7SB7TNyhQXAFwBcAXAFwBcA8/lDjNBhMTWW2nQqyjv5jzfrY2OSMP/EY+jS7HON+F9fwIq8s2nJ+B8oyVTzaNJfyJ+96/zPoE82xMs6rJ+J1AgABa+QNH061S2yMIJ7zbf9qPPf8AiBXtQo0d8nLkrf3M6jo1SvOpU3JLn/sXK55edaLgC4By1CVE8TmqEqJolwwvQhuR4HqWH9TDgvI0FTrviSkxYAAAAAAAAAACmVunPflxZ5fi/Xz/AFPzOhj1FwRJBmIyyR1RepETIWZuUsUsc+JnVX/DhTlv1Jx+igzYYSngX/8AYnNfpgn8XJeRj1nXXq4xfFtfJni43E5ST/Do4e3arzf1muB0uFwHRmds/EVL+Ksv/F+Zq6uIypHq0ovg/uvI8DHY/KnXUqUktuZhKbXnKL4nTYTIXRufUlGb/wD0d+Sa8jWVcp5Sg/xU2vY7c7Hj1cdjW9eUcQn7FCH0jY3kOj2S4rVh4cr+dzBeXMTfX5mnO8b/ABLE+f8Akv8AQGTP8vD3UU9N4j9sxzrG/wASxPn/AJHoDJn+Xh7qHpuv+2Q4znVaEqVXH1505q0oy1xavfXr7UiWhkfAUKiqUqMYyWxpa0UllmtJWls4k8VZJdSVjZGobu7mQUABpKriYv8AAxdShB7YwWpy7Xr8DCxWTsJimnXpxk1sur2NhhMoTw0XGPa95jnWO/iVf6/+Ri+gMmf5eHuoy/Tlbx5/Yt/IXKWInKpRxFd17Rz6c5QUZxSaUk2n6S1p69e3WcP0yyFhcJRhicNHNvLNaWx3TaduzZbV4G7yNlSeKqOlNbFe/tX1Lhc89sdDY5qhKiaJzVCRE0S44boQ3I8D1LD+phwXkc/U674kpMWAAAAAAAAAAApdbpz35cTy/F+vn+p+Z0MOouCN4GIy1nVcjIRcAXANakmlqSb7L2JqEKcpWqSzVvtf5osm5JfhVzzsRj8RHo4NzXaq9Pha5vcNkrJdXrY5LwdOXm2ka6ti8ZDq4e//AFIpmX5znWdSpRlRlNLVK/pNK102lfqPUsgUsPRwaoUKyqxjfWraru9nZvecZlWVWpXdSpTcG+x9tjzTdGtAAAAAAAAAABZuQ1H8SrU6owUPfKV/0nBdPq6WFpUe1ycvZFW/uOn6M0r1Z1Nytzd/kXK55adkQVesviSROeZIiZFxw3QhuR4HqWH9TDgvI5+p13xJSYsAAAAAAAAAABS6/Tnvy4s8vxfr5/qfmdDDqLgjaBjWX8378i2d7ajNSpV/ZhTe9VlH9DMinTwb69Sa4U4v+9GHN111YxfGTX9rIZVcR1UqPz5v/tmdSoZIfXrVP+3H/WyCU8b2U4e+/wDSiCpWxnVSw/zJv8kZtPDdH/5q9X3V9GQTqZS/lpw5v7HNPEZQ6qOH9z+8zMp4Xouttap7U/lAxZVcsdlOH74s554jKXqoLw0T4yM2nh+if5jfHP8AojHlVy33F/T9Tzco4LHV3HS03LNvm20Ste19m3YjoMm47o/gFJYaqo51r3ctdr262zb2GrxmEyrimtNC9tnV7eBxf6FifUS/p+5tP8Q5L/PjzML0Pjfy38B/oWJ9RL+n7j/EOS/z48x6Hxv5b+B59aDhUnSlqq083PjqvHOV1fxWs2eHxFLEU1VpSzovY1s1O3mYdfD1aEs2pGzMExCADMIOTUUrttJLtb2Fs5KEXKTslrLoxcpKK2s9D/QsT6iX9P3NR/iHJf58eZsPQ+N/LfwNoZAxLaWha9rcUl9SOp0lyXTi5Ounwu3yRdDIuNk7aN+2xc8i5PWGpKne8m86clscn2ezUkeUZeyvLKmKda1orVFbl4+L2vlrsdvk3ALB0FT2va34nfc0psLEVUviXxOeZIiVFyw3QhuR4HqOG9TDgvI5+p13xJSYsAAAAAAAAAABS6/Tnvy4s8vxXr5/qfmdDDqLgjakYsikiW5aWWFwLC4FhcCwuBYXAsLgWFwD5XWraXE42r3sVOC9sKdoRf0PeMiUNBk6hT/5E/a1d/FnnOW6ufin4GxtDUAA78gUs/E0V2TzvhTl+RpukNfQ5Mrz/wCVr3vw/M2OSKWkxtOPjflr+R9DueGHplhcCwuBYXAsaVCqLokEiREiLlhuhDcjwPUcN6mHBeRz9TrviSkxYAAAAAAAAAACl4jpz35cWeYYr18/1PzOhh1FwRtT2GKykje5SxaLiwFxYC4sBcWAuLAXFgRYmuqcJ1HspwlN+EU2+BLQoutVjTW2TS5uxbOWbFyfYfKMkp6GDeuUk5yfa5Nyv9T6EUVFWWxHlmMnnVpPxOwqYwAPd5HUr15S6oU35tpcLnHdN6+Zk9U1/NNckm/Ox0fRmlnYpz3R+La+5c7nk1juxcWAuLAXFgYlsBVHPIvRKi54boQ3Y8D1HDephwXkc9U674kpMWAAAAAAAAAAAq2VsDKnUlKzdObbUupX2p9hwOWMn1KFaVS34ZO991+x7vA3WGrxnBLtRypmlJrGbgWFwLC4FhcCwuBYXAsLgWPD5b4rR5PxL6509Eva6klD9RvejVDTZUorc873U5eaMTHzzMPJ+BS6UM2MY9UUo+Sse1nlknnNs3BaAC1cjKdoVZ9sox+FX/Ueb9PK96lGjuTlzaS8mdr0VpWp1Km9pctfzLHc8/OrsLgWFwLC4FhcCxvhcHKrPNitV/Sl1RRnYHA1MXUUYLV2vsX73FtStGnG7LdGNkktiVkekxiopJGibu7mSpQAAAAAAAAAAAA00Ue6vJEeip91ci7OlvGij3V5IaKn3VyGdLeNFHuryQ0VPurkM6W8aKPdXkhoqfdXIZ0t40Ue6vJDRU+6uQzpbxoo91eSGip91chnS3jRR7q8kNFT7q5DOlvGij3V5IaKn3VyGdLea1MPCStKEJLscYtF0YRi7xVijbepmvMqXqqfwR+xJny3kejjuQ5lS9VT+CP2GfLeNHHchzKl6qn8EfsM+W8aOO5G0MPCOpQil7IpEcoxm7yV+JfH8OpajbRR7q8kW6Kn3VyLs6W8aKPdXkhoqfdXIZ0t40Ue6vJDRU+6uQzpbxoo91eSGip91chnS3jRR7q8kNFT7q5DOlvNkrbC9JLUi25kqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q=="
            alt="Flipkart"
            className="w-32 h-32"
          />
          <Typography variant="h6">Ab har wish hogi poori</Typography>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 p-8">
          <IconButton
            className="absolute top-4 right-4"
            onClick={() => navigate("/")}
          >
            ✕
          </IconButton>
          <Typography variant="h5" className="text-center font-semibold">
            Login
          </Typography>
          <Typography className="text-center text-gray-500 mb-4">
            Get access to your Orders, Wishlist, and Recommendations
          </Typography>

          <form className="space-y-4 mt-4">
            {/* Email Field */}
            <TextField
              fullWidth
              label="Enter Email/Mobile Number"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />

            {/* Password Field */}
            <TextField
              fullWidth
              label="Enter Password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handlePasswordVisibility}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Typography className="text-right text-blue-500 cursor-pointer">
              Forgot?
            </Typography>

            {/* Buttons */}
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleLogin}
              className="mt-4"
            >
              Login
            </Button>
            <Button fullWidth variant="outlined" color="primary"  onClick={() => navigate("/signup")}>
              Sign up
            </Button>
          </form>

          <Typography variant="caption" className="block mt-4 text-gray-500">
            We no longer support social logins. <a href="#" className="text-blue-500">Click here</a> for more info.
          </Typography>
        </div>
      </div>
    </div>
  );
}
