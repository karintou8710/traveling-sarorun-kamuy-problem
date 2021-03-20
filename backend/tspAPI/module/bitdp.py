class BitDP:
    """
    bitdpのデータの保持、計算をする。
    """

    def __init__(self, n, start, end, graph, INF=1<<63):
        """
        Parameters
        ----------
        n : int
            頂点の個数
        start : int
            始点
        end : int
            終点 (空文字は任意の終点のうち最小値)
        graph : list
            n*nの隣接行列
        INF : int
            無限値 
        """

        self.n = n
        self.start = start
        self.end = end
        self.graph = graph
        self.INF = INF

        self.dp = [[self.INF] * n for _ in range(1<<n)]
        self.dp[0][self.start] = 0
        self.restore = [[-1] * n for _ in range(1<<n)]
        self.route = []
        self.times = []

        self._calc()

    def _calc(self):
        """
        dpと経路復元の計算を行う
        """
        
        n = self.n

        # bitdp
        for i in range(1<<n):
            for j in range(n): # 次の頂点
                for k in range(n): # 今の頂点
                    if (i!=0 and not (i & (1<<k) )): # 今の頂点が含まれていない(始めを除く)
                        continue
                    if ( (i & 1<<j) == 0 and j!=k): # まだ訪れていない頂点へ
                        if self.dp[i|(1<<j)][j] > self.dp[i][k] + self.graph[k][j]:
                            self.dp[i|(1<<j)][j] = self.dp[i][k] + self.graph[k][j]
                            self.restore[i|(1<<j)][j] = k
        
        # 経路復元

        if self.dp[-1][self.start] == self.INF:
            # 経路が存在しない
            return

        s = (1<<n) - 1
        v = self.end

        if self.start!=self.end:
            s ^= (1<<self.start)

        if v == "":
            v = min(enumerate(self.dp[s]), key = lambda x : x[1])[0]

        self.route.append(v)

        while (1):
            prevVertex = self.restore[s][v]
            if (prevVertex==-1):
                break
            self.route.append(prevVertex)
            s ^= 1<<v
            self.times.append(self.graph[prevVertex][v])
            v = prevVertex
        
        self.times.append(0)
        
        self.route.reverse()
        self.times.reverse()

        for i in range(len(self.times)-1):
            self.times[i+1] += self.times[i]

    def getValue(self):
        """
        DPの結果を返す

        Returns
        -------
        ans or -1 : int
            dpの答えが存在しなかったら-1を返す
        """

        ans = self.dp[-1][self.start]
        ans = ans if ans != self.INF else -1
        return  ans
    
    def getRoute(self):
        """
        経路復元の結果を返す

        Returns
        -------
        route : list
            最適ルート
        """
        return self.route
    
    def getTimes(self):
        """
        経路復元の結果、各道のりにかかる時間を返す。

        Returns
        -------
        times : list
            最適なルートの時間(分)
        """
        return self.times

"""
Example
-------
INF = 1<<63
n, m = [int(x) for x in input().split()]
graph = [[INF]*n for _ in range(n)]
for i in range(m):
    x, y, w = [int(x) for x in input().split()]
    graph[x][y] = w
start = 0
end = ""
bitdp = BitDP(n, start, end, graph, INF)

print(bitdp.getValue())
print(bitdp.getRoute())
print(bitdp.getTimes())
"""
