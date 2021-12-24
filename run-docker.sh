docker run \
	-d -v /root/portfolio-new/:/src \
	-w /src \
	-e PORT=3333 \
	-p 3333:3333 \
      1417node
	
